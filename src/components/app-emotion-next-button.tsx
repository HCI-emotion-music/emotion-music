import { PlayCircleIcon } from "@heroicons/react/24/solid";

const AppEmotionNextButton = () => {
    return (

            <div className="flex items-center justify-center pr-20">
                <p className="text-gray-700 text-3xl md:text-3xl p-0">Music Recommend</p>
                <a href="/result">
                    <PlayCircleIcon
                        className="mx-auto h-12 text-gray-700 p-2" 
                        aria-hidden="true">
                    </PlayCircleIcon>
                </a>
            </div>
    );
}

export default AppEmotionNextButton;