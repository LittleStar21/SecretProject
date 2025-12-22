import { useState } from "react";
import { motion } from "framer-motion";
import "./Welcome.css";

import snoopyImg from "./assets/hello.png";
import snoopyHugImg from "./assets/test.png";

const Welcome = ({ onNext }) => {
  const [userNameInput, setUserNameInput] = useState("");
  const [partnerNameInput, setPartnerNameInput] = useState("");

  const handleSubmit = () => {
    const correctUserNameArray = ["Gamin", "gamin", "鄭佳旻", "佳旻"];
    const correctParnerNameArray = [
      "Leonard Ian",
      "leonard ian",
      "Ian",
      "ian",
      "Leonard",
      "leonard",
    ];

    const isUserNameCorrect = correctUserNameArray.includes(
      userNameInput.trim(),
    );
    const isPartnerNameCorrect = correctParnerNameArray.includes(
      partnerNameInput.trim(),
    );

    if (
      partnerNameInput.trim() === "楊咩咩" ||
      partnerNameInput.trim() === "羊咩咩"
    ) {
      alert("😡😡😡");
    } else if (!isUserNameCorrect || !isPartnerNameCorrect) {
      alert("Please try again!");
    } else {
      onNext();
    }
  };

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

            <div className="inputs-container">
              <motion.div
                className="input-container"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 2, duration: 0.8 },
                }}
              >
                <div className="input-entry-area">
                  <input
                    type="text"
                    required
                    value={userNameInput}
                    onChange={(e) => {
                      setUserNameInput(e.target.value);
                    }}
                  ></input>
                  <div className="input-labelline">Enter your name</div>
                </div>
              </motion.div>

              <motion.div
                className="input-container"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 3, duration: 0.8 },
                }}
              >
                <div className="input-entry-area">
                  <input
                    type="text"
                    required
                    value={partnerNameInput}
                    onChange={(e) => {
                      setPartnerNameInput(e.target.value);
                    }}
                  ></input>
                  <div className="input-labelline">
                    Enter your partner's name
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="snoopy-hug-img-container"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 4, duration: 0.8 },
              }}
            >
              <img
                className="snoopy-hug-img"
                src={snoopyHugImg}
                alt="test-img"
              ></img>
            </motion.div>

            <motion.button
              className="submit-button"
              onClick={handleSubmit}
              initial={{ opacity: 0, y: 50, scale: 0 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  delay: 5,
                  duration: 0.2,
                },
              }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
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
