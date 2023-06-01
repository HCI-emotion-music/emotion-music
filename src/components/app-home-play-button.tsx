import { PlayCircleIcon } from "@heroicons/react/24/solid";

const AppHomePlayButton = () => {
    return (
        <div className="w-full md:w-1/2 p-8 flex items-center justify-center py-5">
            <div className="flex items-center justify-content">
                <p className="text-white text-1xl md:text-1xl p-0">Click Here to Play</p>
                <PlayCircleIcon
                    className="mx-auto h-12 text-gray-200 p-2" 
                    area-hidden="true">
                </PlayCircleIcon>

            </div>
        </div>
    );
}

export default AppHomePlayButton;