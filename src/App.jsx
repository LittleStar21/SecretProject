import { useState } from "react";
import Welcome from "./Pages/Welcome";
import IntroductionPage from "./Pages/IntroductionPage";
import MainPage from "./Pages/MainPage";

import "./App.css";

const App = () => {
  /**
   * 0: Input your name
   * 1: Introduction
   * 2: Main Page
   */
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="my-app">
      {currentPage === 0 && (
        <Welcome onNext={() => setCurrentPage(1)}></Welcome>
      )}
      {currentPage === 1 && (
        <IntroductionPage onNext={() => setCurrentPage(2)}></IntroductionPage>
      )}
      {currentPage === 2 && (
        <MainPage onNext={() => setCurrentPage(3)}></MainPage>
      )}
    </div>
  );
};

export default App;
