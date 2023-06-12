import React from "react";
import AppMenu from "../components/app-menu";
import AppHomeTitle from "../components/app-home-title";
import AppHomePlayButton from "../components/app-home-play-button";
import backgroundImage from '../Background-Image1.png'; 

const HomePage = () => {
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    height: '100vh',
  };

  return (
    <div style={styles}>
      <AppMenu />

      <div className="flex pt-16 lg:pt-32 pb-24 lg:pb-52 overflow-hidden">
        <AppHomeTitle />
        <AppHomePlayButton />
      </div>
    </div>
  );
};

export default HomePage;
