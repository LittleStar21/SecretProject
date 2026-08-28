import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GoodbyePage from "./Pages/GoodbyePage";
import SlideshowPage from "./Pages/SlideshowPage";
import "./App.css";

const App = () => {
  /**
   * 0: Goodbye Message Page
   * 1: Photo Slideshow Page
   */
  const [currentPage, setCurrentPage] = useState(0);

  const pageVariants = {
    initial: { opacity: 0, scale: 0.96 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 1.02,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <div className="my-app">
      <AnimatePresence mode="wait">
        {currentPage === 0 && (
          <motion.div
            key="goodbye"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ width: "100%" }}
          >
            <GoodbyePage onStartSlideshow={() => setCurrentPage(1)} />
          </motion.div>
        )}
        {currentPage === 1 && (
          <motion.div
            key="slideshow"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ width: "100%" }}
          >
            <SlideshowPage onBackToMessage={() => setCurrentPage(0)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
