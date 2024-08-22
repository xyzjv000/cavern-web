import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingPage = () => {
  return (
    <div className="w-screen h-screen absolute bg-white z-50 bg-opacity-60 flex justify-center items-center">
      <div className="flex flex-col items-center justify-center bg-white p-8 shadow-md gap-4">
        <CircularProgress className="text-primary" />
        <p className="text-primary w-64 text-center text">Just a moment, we're getting things ready...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
