import { useState } from "react";
import { motion } from "framer-motion";
import "./Welcome.css";

import snoopyImg from "./assets/hello.png";

const Welcome = ({ onNext }) => {
  const [input, setInput] = useState("");
  const correctName = "Gamin";
  const [error, setError] = useState(false);

  function handleSubmit() {
    if (input.trim() === correctName) {
      onNext();
    } else {
      setError(true);
    }
  }

  return (
    <div>
      <div className="welcome-topbar"></div>
      <div className="welcome-background">
        <div className="welcome-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 2, ease: "easeOut" },
            }}
          >
            <motion.div
              className="welcome-title"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1, duration: 0.8 },
              }}
            >
              Hello!
            </motion.div>

            <motion.div
              className="welcome-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 2, duration: 0.8 },
              }}
            >
              Please enter your name
            </motion.div>

            <motion.input
              type="text"
              placeholder="Your name"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setError(false);
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 2, duration: 0.8 },
              }}
            ></motion.input>

            {error && <div>Incorrect Name</div>}

            <motion.button
              onClick={handleSubmit}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 2, duration: 0.8 },
              }}
            >
              Next page
            </motion.button>
          </motion.div>
        </div>
        <img
          src={snoopyImg}
          alt="Snoopy image"
          className="welcome-snoopy-img"
        ></img>
      </div>
    </div>
  );
};

export default Welcome;
