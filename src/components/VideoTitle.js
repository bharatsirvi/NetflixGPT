import React from "react";

const VideoTitle = ({ title, overview, adult }) => {
  return (
    <div className="z-20 absolute inset-0 flex flex-col justify-center items-start px-16 text-white pointer-events-none">
      <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">{title}</h1>
      <p className="text-lg w-1/3 mb-6 drop-shadow-md">{overview}</p>
      <div className="flex items-center gap-4 pointer-events-auto">
        <button className="bg-white text-black text-md font-bold px-8 py-3 rounded-md flex items-center gap-2 hover:bg-opacity-80 transition cursor-pointer">
          ▶ Play
        </button>
        <button className="bg-gray-700 bg-opacity-80 text-white text-md font-bold px-8 py-3 rounded-md hover:bg-opacity-60 transition cursor-pointer">
          More Info
        </button>
      </div>
      {!adult && (
        <div className="absolute z-30 bottom-64 right-0 bg-zinc-600 bg-opacity-60 border-l-2 text-white px-4 py-2 flex items-center gap-2 pointer-events-auto">
          U/A 18+
        </div>
      )}
    </div>
  );
};

export default VideoTitle;
