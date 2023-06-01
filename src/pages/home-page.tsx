import React from "react";
import AppMenu from "../components/app-menu";

const HomePage = () => {
  return (
    <div>
        <AppMenu />

        {/* TITLE */}
        <div className="bg-blue-100">
            <h2 className="text-6xl font-bold tracking-tight text-white">AI FACE MUSIC</h2>
            <p className="text-white">Click to Play</p>
            <button
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                아이콘 집어 넣기
            </button>
        </div>
    </div>
  );
};

export default HomePage;
