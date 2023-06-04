import React from "react";
import AppMenu from "../components/app-menu";
import AppHomeTitle from "../components/app-home-title";
import AppHomePlayButton from "../components/app-home-play-button";

const HomePage = () => {
  return (
    <div className="bg-[url('https://file.notion.so/f/s/d1997c42-d830-4a3e-8a35-14a301c2d54c/Background-image.png?id=8990cfec-2096-415f-9e05-f202b0011262&table=block&spaceId=c515dabd-c53c-43dc-9cfc-f31afa516ba4&expirationTimestamp=1685944183996&signature=Sk2WxtKR5-oZRFrtoqY-_2NI6Ed7_X72JYf5h-jC7z8&downloadName=Background-image.png')]">
        <AppMenu />

        <div className="flex pt-16 lg:pt-32 pb-24 lg:pb-52 overflow-hidden">
            <AppHomeTitle />
            <AppHomePlayButton />
        </div>
    </div>
  );
};

export default HomePage;
