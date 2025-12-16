import { useEffect, useState } from "react";
import Welcome from "./Pages/Welcome";
import MainPage from "./Pages/MainPage";
import "./App.css";

const App = () => {
  /**
   * 0: Input your name
   * 1: Memories
   * 2: Things I like about you
   * 3: Ask her out
   */
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

  return (
    <div className="my-app">
      {currentPage === 0 && (
        <Welcome onNext={() => setCurrentPage(1)}></Welcome>
      )}
      {currentPage === 1 && <MainPage></MainPage>}
    </div>
  );
};

export default App;
