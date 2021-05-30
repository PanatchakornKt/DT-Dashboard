import React from "react";
import NavBar from "./navbar";

const MainLayout = ({ children }) => {
  return (
    <>
    <div className="min-h-screen bg-gray-200">
      <div className="w-100 max-w-4xl mx-auto p-5">
        <h1 className="text-4xl font-bold undefined">Daytech Dashboard</h1>
        <NavBar />
        {children}
      </div>
    </div>
    </>
  );
};

export default MainLayout;
