import React from "react";
import AppMenu from "../components/app-menu";
import AppEmotionTitle from "../components/app-emotion-title";
import AppHomeTitle from "../components/app-home-title";
import { useLocation } from "react-router-dom";
import AppEmotionNextButton from '../components/app-emotion-next-button';
import backgroundImage from '../Background-Image2.png';
const EmotionPage = () => {
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    height: '100vh',
  };

  const location = useLocation();

  const emotionResult = new URLSearchParams(location.search).get("result") ?? "결과 값이 없습니다.";

  return (
      <div style={styles}>
      <AppMenu />
      <AppEmotionTitle />
      <div className="flex items-center text-white justify-center h-screen">
        <p>{emotionResult}</p>
      </div>
        <AppEmotionNextButton />
      </div>
  );
};

export default EmotionPage;

