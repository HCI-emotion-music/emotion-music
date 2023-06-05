import React,{ ChangeEvent, useState }  from 'react';
import AppMenu from '../components/app-menu';
import AppMainTitle from '../components/app-main-title';
import AppMainPhotoUpload from '../components/app-main-photo-upload';
import AppMainSubmitButton from '../components/app-main-submit-button';
import AppMainTextArea from '../components/app-main-text-area';


interface SentimentAnalysisResponse {
  documentSentiment: {
    score: number;
  };
}

interface FaceAnalysisResponse {
  faceAnnotations: FaceAnnotation[];
}

interface FaceAnnotation {
  joyLikelihood: string;
  sorrowLikelihood: string;
  angerLikelihood: string;
  surpriseLikelihood: string;
}

const MainPage: React.FC = () => {
  // const [textToAnalyze, setTextToAnalyze] = useState("");
  const [analysisResult, setAnalysisResult] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [faceAnalysisResult, setFaceAnalysisResult] = useState("");

  async function analyze() {
    // await analyzeText();
    await analyzeImage();
  }

  // async function analyzeText() {
  //   try {
  //     const response: SentimentAnalysisResponse = await fetchYourSentimentAnalysisApi(textToAnalyze);
  //     const sentimentScore = response.documentSentiment.score;

  //     setAnalysisResult(`감정 점수: ${sentimentScore}`);
  //   } catch (error) {
  //     console.error(error);
  //     setAnalysisResult("감정 분석 중 오류가 발생했습니다.");
  //   }
  // }

  async function analyzeImage() {
    if (!imageFile) return;

    try {
      const response: FaceAnalysisResponse = await fetchYourFaceAnalysisApi(imageFile);
      const faceAnnotations: FaceAnnotation = response.faceAnnotations[0];

      let emotions: string[] = [];
      if (faceAnnotations.joyLikelihood === "VERY_LIKELY") {
        emotions.push("JOY");
      } else if (faceAnnotations.sorrowLikelihood === "VERY_LIKELY") {
        emotions.push("SORROW");
      } else if (faceAnnotations.angerLikelihood === "VERY_LIKELY") {
        emotions.push("ANGER");
      } else if (faceAnnotations.surpriseLikelihood === "VERY_LIKELY") {
        emotions.push("SURPRISE");
      } else {
        emotions.push("NO EMOTION");
      }

      setFaceAnalysisResult(`FACE EMOTION : ${emotions.join(", ")}`);
    } catch (error) {
      console.error(error);
      setFaceAnalysisResult("얼굴 감정 분석 중 오류가 발생했습니다.");
    }
  }

  async function fetchYourSentimentAnalysisApi(text: string): Promise<SentimentAnalysisResponse> {
    const baseUrl = "https://language.googleapis.com/v1/documents:analyzeSentiment";
    const apiKey = "AIzaSyC0Ml7KWAWoshDuttN89IcSXcNuCYjK708";

    const response = await fetch(`${baseUrl}?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        document: {
          type: "PLAIN_TEXT",
          language: "ko",
          content: text,
        },
        encodingType: "UTF8",
      }),
    });

    if (!response.ok) {
      const errorInfo = await response.json();
      throw new Error(`API 호출 중 문제가 발생했습니다: ${errorInfo.error.message}`);
    }

    return await response.json();
  }

  async function fetchYourFaceAnalysisApi(imageFile: File): Promise<FaceAnalysisResponse> {
    const apiKey = "AIzaSyC0Ml7KWAWoshDuttN89IcSXcNuCYjK708"; // 기존 API 키를 사용
    const apiUrl = `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`;

    const formData = new FormData();
    formData.append("image", imageFile);

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        requests: [
          {
            image: {
              content: await toBase64(imageFile),
            },
            features: [
              {
                type: "FACE_DETECTION",
                maxResults: 1,
              },
            ],
          },
        ],
      }),
    }).then((res) => res.json());

    return response.responses[0];
  }

  async function toBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve((reader.result as string).split(",")[1]);
      reader.onerror = (error) => reject(error);
    });
  }

  function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setImageFile(e.target.files[0]);
    }
  }

//   return (
//     <>
//       <h1>FACE & TEXT</h1>
//       <textarea
  
//         placeholder="text here..."
//         value={textToAnalyze}
//         onChange={(e) => setTextToAnalyze(e.target.value)}
//       />
//       <br />
//       <input type="file" onChange={handleImageChange} accept="image/*" />
//       <br />
//       <button onClick={analyze}>ANALYZE</button>
//       <p>{analysisResult}</p>
//       <p>{faceAnalysisResult}</p>
//     </>
//   );
// };

// export default MainPage;

  return (
    <div>
      <AppMenu />
      <AppMainTitle />
      
      <div className="px-20">
        <AppMainPhotoUpload onChange={handleImageChange} />
        <AppMainSubmitButton onClick={analyze} />
        <p>{faceAnalysisResult}</p>
      </div>
    </div>
  );
};

export default MainPage;


