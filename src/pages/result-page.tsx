import React from "react";
import AppMenu from "../components/app-menu";
import { useLocation } from "react-router-dom";
import backgroundImage from '../Background-Image3.png';
const ResultPage = () => {
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    height: '100vh',
  };


  return (
    <div style={styles}>
        <AppMenu />
    </div>
  );
};

export default ResultPage;