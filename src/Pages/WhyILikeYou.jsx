import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WhyILikeYou = ({ onBackButtonClicked }) => {
  const [step, setStep] = useState(0);
  const [error, setError] = useState(false);

  // Total steps in the quest
  const totalSteps = 3;
  const progress = (step / (totalSteps - 1)) * 100;

  const handleNextStep = () => {
    setError(false);
    setStep((prev) => prev + 1);
  };

  const triggerError = () => {
    setError(true);
    // Brief shake animation effect could go here
  };

  return (
    <div style={styles.pageWrapper}>
      {/* Progress Bar */}
      <div style={styles.progressBarContainer}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          style={styles.progressBar}
        />
      </div>

      <button onClick={onBackButtonClicked} style={styles.backBtn}>
        ← Exit Quest
      </button>

      <div style={styles.questContent}>
        <AnimatePresence mode="wait">
          {/* STAGE 1: THE MEMORY TEST */}
          {step === 0 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              style={styles.card}
            >
              <span style={styles.icon}>🔍</span>
              <h2>Stage 1: The Memory Test</h2>
              <p>
                In our memories, what did I give a "满分" (perfect score) for?
              </p>

              <div style={styles.buttonGroup}>
                <button style={styles.gameBtn} onClick={handleNextStep}>
                  Walking to Tiger Head Hill
                </button>
                <button style={styles.gameBtn} onClick={triggerError}>
                  Eating Sushi
                </button>
              </div>

              {error && (
                <motion.p
                  animate={{ x: [-5, 5, -5, 5, 0] }}
                  style={styles.errorText}
                >
                  Try again! I know you remember! 😉
                </motion.p>
              )}
            </motion.div>
          )}

          {/* STAGE 2: THE PERSONALITY TEST */}
          {step === 1 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              style={styles.card}
            >
              <span style={styles.icon}>🧠</span>
              <h2>Stage 2: The Truth</h2>
              <p>
                Which of these is the real reason I like spending time with you?
              </p>

              <div style={styles.buttonGroup}>
                <button style={styles.gameBtn} onClick={handleNextStep}>
                  Because you make every walk an adventure
                </button>
                <button style={styles.gameBtn} onClick={handleNextStep}>
                  Because even looking at phones together is fun
                </button>
              </div>
              <p style={styles.hint}>(Trick question: Both are true!)</p>
            </motion.div>
          )}

          {/* STAGE 3: THE FINAL REWARD */}
          {step === 2 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              style={styles.card}
            >
              <span style={styles.icon}>🏆</span>
              <h2>Quest Complete!</h2>
              <p style={styles.finalText}>
                I like you because you are patient with me, even when I'm
                nervous, and because you've turned simple walks into my favorite
                memories of 2025.
              </p>
              <motion.div
                animate={{ rotate: [0, 10, -10, 10, 0], scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                style={{ fontSize: "4rem", margin: "20px 0" }}
              >
                ❤️
              </motion.div>
              <button style={styles.gameBtn} onClick={() => setStep(0)}>
                Play Again?
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Simple internal styles for quick setup
const styles = {
  pageWrapper: {
    minHeight: "100vh",
    background: "#fff5f7",
    padding: "20px",
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  progressBarContainer: {
    width: "100%",
    maxWidth: "400px",
    height: "8px",
    background: "#ffdce3",
    borderRadius: "10px",
    marginBottom: "40px",
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    background: "#ff4d6d",
  },
  backBtn: {
    alignSelf: "flex-start",
    background: "none",
    border: "none",
    color: "#ff4d6d",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  questContent: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "24px",
    boxShadow: "0 10px 25px rgba(255, 77, 109, 0.15)",
    textAlign: "center",
    maxWidth: "400px",
    width: "100%",
  },
  icon: { fontSize: "3rem", display: "block", marginBottom: "10px" },
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "20px",
  },
  gameBtn: {
    padding: "12px 20px",
    borderRadius: "12px",
    border: "none",
    background: "#ff4d6d",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "transform 0.2s",
  },
  errorText: {
    color: "#ff4d6d",
    fontSize: "0.9rem",
    marginTop: "10px",
    fontWeight: "bold",
  },
  hint: { fontSize: "0.8rem", color: "#888", marginTop: "10px" },
  finalText: { fontSize: "1.1rem", lineHeight: "1.6", color: "#444" },
};

export default WhyILikeYou;
