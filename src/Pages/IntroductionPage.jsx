import { motion } from "framer-motion";

import "./IntroductionPage.css";

const IntroductionPage = ({ onNext }) => {
  const bodyTexts = [
    "我是Leonard Ian.",
    "首先，謝謝你要跟我繼續相處。也謝謝你願意打開這個網站，也願意花時間看下去。",
    "其實我想了很久，才決定用這樣的方式跟你說話。因為有些感受，如果只是用訊息說，好像很容易被忽略，但我真的很在乎。",
    "和你相處的這段時間，對我來說是很珍貴的。不是因為完美，而是因為真實。",
    "我希望你在這裡看到的，不是壓力、不是期待，而是一個很認真，很溫柔地喜歡著你的人。",
  ];

  return (
    <div className="introduction-page-container">
      <motion.div
        className="introduction-title"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 2, ease: "easeOut" },
        }}
      >
        嗨，佳旻！
      </motion.div>

      {bodyTexts.map((bodyText, bodyTextIdx) => {
        return (
          <motion.div
            key={bodyTextIdx}
            className="introduction-body"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: bodyTextIdx + 1,
                duration: 1,
                ease: "easeOut",
              },
            }}
          >
            {bodyText}
          </motion.div>
        );
      })}
      <motion.button
        className="introduction-submit-button"
        onClick={onNext}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 2, ease: "easeOut", delay: 6 },
        }}
      >
        Next
      </motion.button>
      <motion.button
        className="introduction-submit-button"
        onClick={() => {
          alert("Don't be lazy! Use english!");
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 2, ease: "easeOut", delay: 6 },
        }}
      >
        下一頁
      </motion.button>
    </div>
  );
};

export default IntroductionPage;
