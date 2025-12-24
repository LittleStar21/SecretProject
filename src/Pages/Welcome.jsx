import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Welcome.css";

import snoopyImg from "./assets/hello.png";
import snoopyHugImg from "./assets/test.png";

const Welcome = ({ onNext }) => {
  const [userNameInput, setUserNameInput] = useState("");
  const [partnerNameInput, setPartnerNameInput] = useState("");
  const [meetDate, setMeetDate] = useState("");
  const [meetLocation, setMeetLocation] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const user = userNameInput.trim().toLowerCase();
    const partner = partnerNameInput.trim().toLowerCase();
    const location = meetLocation.trim().toLowerCase();

    const isUserCorrect = ["gamin", "鄭佳旻", "佳旻"].includes(user);
    const isPartnerCorrect = ["ian", "leonard", "楊聰恩", "聰恩"].some((name) =>
      partner.includes(name),
    );

    const isDateCorrect = meetDate === "2025-11-01";
    const isLocationCorrect = location === "桃園火車站";

    if (partner === "楊咩咩" || partner === "羊咩咩") {
      setError("No! Please use my real name here 😡");
    } else if (
      isUserCorrect &&
      isPartnerCorrect &&
      isDateCorrect &&
      isLocationCorrect
    ) {
      setError("");
      onNext();
    } else {
      if (!isDateCorrect || !isLocationCorrect) {
        setError("Are you sure about that date or place? Think harder! 🔍");
      } else {
        setError("Access Denied: Only the VIP couple can enter! ✨");
      }
    }
  };

  return (
    <div className="welcome-page">
      <div className="welcome-background">
        <motion.div
          className="welcome-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="welcome-title">Hello!</div>

          <div className="inputs-group">
            <div className="input-entry-area">
              <input
                type="text"
                required
                value={userNameInput}
                onChange={(e) => setUserNameInput(e.target.value)}
              />
              <div className="input-labelline">Your Name</div>
            </div>

            <div className="input-entry-area">
              <input
                type="text"
                required
                value={partnerNameInput}
                onChange={(e) => setPartnerNameInput(e.target.value)}
              />
              <div className="input-labelline">Partner's Name</div>
            </div>

            <div className="input-entry-area">
              <input
                type="date"
                required
                className="date-input"
                value={meetDate}
                onChange={(e) => setMeetDate(e.target.value)}
              />
              <div className="input-labelline date-label">
                When did we first meet?
              </div>
            </div>

            <div className="input-entry-area">
              <input
                type="text"
                required
                value={meetLocation}
                onChange={(e) => setMeetLocation(e.target.value)}
              />
              <div className="input-labelline">Where did we first meet?</div>
            </div>
          </div>

          {/* Inline Error Message */}
          <div className="error-message-container">
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="error-text"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="snoopy-hug-container">
            <img
              className="snoopy-hug-img"
              src={snoopyHugImg}
              alt="Snoopy Hug"
            />
          </div>

          <button className="submit-button" onClick={handleSubmit}>
            Enter
          </button>
        </motion.div>
        <img src={snoopyImg} alt="Snoopy" className="welcome-snoopy-corner" />
      </div>
    </div>
  );
};

export default Welcome;
