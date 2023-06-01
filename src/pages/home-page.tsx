import React from "react";
import AppMenu from "../components/app-menu";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import AppHomeTitle from "../components/app-home-title";

const HomePage = () => {
  return (
    <div>
        <AppMenu />

        <div className="flex pt-16 lg:pt-32 pb-24 lg:pb-52 overflow-hidden bg-black">
            <AppHomeTitle />
            <div className="w-full md:w-1/2 p-8 flex items-center justify-center py-5">
                <div className="flex items-center justify-content">
                    <p className="text-white text-1xl md:text-1xl p-0">Click Here to Play</p>
                    <PlayCircleIcon
                        className="mx-auto h-12 text-gray-200 p-2" 
                        area-hidden="true">
                    </PlayCircleIcon>

                </div>
            </div>
        </div>
    </div>
  );
};

export default HomePage;
