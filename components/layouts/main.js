import React, { useState } from "react";

const MainLayout = ({ children }) => {
  const [status, setStatus] = useState(0);

  const onWidgets = () => {
    setStatus(0);
    console.log("katang");
  };

  const onAbout = () => {
    setStatus(1);
    console.log(status);
  };
  return (
    <div
      className="min-h-screen bg-gray-200"
      onSubmit={(e) => e.preventDefault()}
    >
      {status === 0 ? (
        <div>
          <a
            className="inline-block px-4 py-1 mr-1.5 rounded-lg text-white bg-blue-500"
            onClick={onWidgets}
          >
            Widgets
          </a>
          <a className="inline-block px-4 py-1 mr-1.5 rounded-lg text-blue-500 bg-white"
          onClick={onAbout}>
          
            About
          </a>
        </div>
      ) : (
        <div>
          <a className="inline-block px-4 py-1 mr-1.5 rounded-lg text-blue-500 bg-white">
            Widgets
          </a>
          <a className="inline-block px-4 py-1 mr-1.5 rounded-lg text-white bg-blue-500">
            About
          </a>
        </div>
      )}

      <div className="w-100 max-w-4xl mx-auto p-5">
        <h1 className="text-4xl font-bold undefined">Daytech Dashboard</h1>
        <div className="my-5">
          <button>
            <a
              className="inline-block px-4 py-1 mr-1.5 rounded-lg text-white bg-blue-500"
              href="/"
            >
              Widgets
            </a>
          </button>
          <button>
            <a
              className="inline-block px-4 py-1 mr-1.5 rounded-lg text-blue-500 bg-white"
              href="/about"
            >
              About
            </a>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
