import { PlayCircleIcon } from "@heroicons/react/24/solid";

const AppHomePlayButton = () => {
    return (
        <div className="w-full md:w-1/2 p-8 flex items-center justify-end py-5">
            <div className="flex items-center justify-content pr-20">
                <p className="text-gray-700 text-1xl md:text-1xl p-0">Click Here to Play</p>
                <a href="/main">
                    <PlayCircleIcon
                        className="mx-auto h-12 text-gray-700 p-2" 
                        area-hidden="true">
                    </PlayCircleIcon>
                </a>
            </div>
        </div>
    );
}

export default AppHomePlayButton;