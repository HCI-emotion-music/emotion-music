import React from "react";
import AppMenu from "../components/app-menu";
import AppHomeTitle from "../components/app-home-title";
import AppHomePlayButton from "../components/app-home-play-button";

const HomePage = () => {
  return (
    <div>
        <AppMenu />
        
        <div className="flex pt-16 lg:pt-32 pb-24 lg:pb-52 overflow-hidden bg-black">
            <AppHomeTitle />
            <AppHomePlayButton />
        </div>
    </div>
  );
};

export default HomePage;
