import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./PartnerQuiz.css";

const PartnerQuiz = ({ onBackButtonClicked }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState(false);

  // Customize these to your actual relationship details!
  const questions = [
    {
      question: "What is my absolute must have food?",
      options: ["Hot Pot", "Ramen", "Chocolate Cake", "Fried Chicken"],
      answer: "Ramen",
    },
    {
      question: "When is my birthday?",
      options: ["20 June", "21 June", "20 July", "21 July"],
      answer: "21 July",
    },
    {
      question: "Who is the person I like the most?",
      options: ["Gamin", "Idk", "Idc", "No one"],
      answer: "Gamin",
    },
  ];

  const handleAnswer = (choice) => {
    if (choice === questions[currentQ].answer) {
      setError(false);
      if (currentQ < questions.length - 1) {
        setCurrentQ(currentQ + 1);
      } else {
        setShowResult(true);
      }
    } else {
      setError(true);
      // Reset the error state quickly so the shake can be re-triggered
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <div className="quiz-page">
      {/* Top Navigation */}
      <button className="quiz-back-btn" onClick={onBackButtonClicked}>
        <span className="arrow">←</span> Back
      </button>

      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key={currentQ}
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -30, opacity: 0 }}
            className={`quiz-card ${error ? "shake-animation" : ""}`}
          >
            <span className="question-number">
              Step {currentQ + 1} of {questions.length}
            </span>
            <h2 className="question-text">{questions[currentQ].question}</h2>

            <div className="quiz-options">
              {questions[currentQ].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt)}
                  className="quiz-opt-btn"
                >
                  {opt}
                </button>
              ))}
            </div>

            <div className="quiz-feedback-area">
              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="error-hint"
                  >
                    Think again... you know me better! 😘
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ) : (
          /* The Reward Screen: The Final Key */
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="key-reward-card"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1, 1.1, 1],
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="key-icon"
            >
              🔑
            </motion.div>

            <h2 className="reward-title">Quest Complete!</h2>
            <p className="reward-sub">You've earned the final key.</p>

            <div className="secret-code">IAN</div>

            <p className="hint-text">
              Use this code to unlock the final chapter in the menu.
            </p>

            <button className="finish-btn" onClick={onBackButtonClicked}>
              Return to Menu
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PartnerQuiz;
