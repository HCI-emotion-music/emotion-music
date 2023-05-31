import React from "react";

const HomePage = () => {
  return (
    <div>
        {/* MENU */}
        <div>
            <a
            href="/#"
            className="text-sm font-semibold leading-6 text-gray-900">
                Home
            </a>
            <a
            href="/main"
            className="text-sm font-semibold leading-6 text-gray-900">
                Main
            </a>
        </div>

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
