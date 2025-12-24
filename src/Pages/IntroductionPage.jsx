import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./IntroductionPage.css";

const IntroductionPage = ({ onNext }) => {
  const [currentText, setCurrentText] = useState(0);

  const bodyTexts = [
    "嗨，佳旻！我是楊聰恩。",
    "首先，謝謝妳要要走進我的生活，謝謝你要跟我繼續相處。我知道我常常對妳不好，但你還是願意跟我繼續下去，所以非常感謝你！",
    "其實我想了很久才決定用這樣的方式跟妳說話，可能有點爛，但我想用我自己的方式告訴妳。因為有些感受，如果只是用訊息說，好像很容易被忽略，但我真的很在乎。而且，我的中文很爛。",
    "和妳相處的每一刻，無論是笑的時候或是安靜地走著，對我來說都是最真實，最溫柔的時光。",
    '我希望妳在這裡能看到我對你的感情，很溫柔地喜歡著妳的人 (不想聽你說："應該有吧")。',
  ];

  const nextStep = () => {
    if (currentText < bodyTexts.length - 1) {
      setCurrentText(currentText + 1);
    } else {
      onNext();
    }
  };

  return (
    <motion.div
      className="intro-container"
      initial={{ backgroundColor: "#f3deca" }}
      animate={{ backgroundColor: "#2f5b64" }}
      transition={{ duration: 1.5 }}
    >
      {/* Decorative background element */}
      <div className="intro-vignette" />

      <div className="intro-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentText}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
            className="intro-text-box"
          >
            {bodyTexts[currentText]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="intro-footer">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="intro-next-btn"
          onClick={nextStep}
        >
          {currentText === bodyTexts.length - 1 ? "開始探索" : "繼續"}
        </motion.button>

        <div className="intro-pagination">
          {bodyTexts.map((_, i) => (
            <div
              key={i}
              className={`dot ${i === currentText ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default IntroductionPage;
