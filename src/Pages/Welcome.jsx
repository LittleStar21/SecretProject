import { useState } from "react";
import { motion } from "framer-motion";
import "./Welcome.css";

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
    <div className="welcome-background">
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
          Welcome!
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
          Hello! Please input your name
        </motion.div>

        <motion.input
          type="text"
          className="w-full border rounded-xl p-3 text-gray-700 mb-2"
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
            transition: { delay: 3, duration: 0.8 },
          }}
        ></motion.input>

        {error && (
          <p className="text-red-500 text-sm mb-2 text-center">
            Incorrect Name
          </p>
        )}

        <motion.button
          onClick={handleSubmit}
          className="w-full bg-pink-500 text-white py-3 rounded-xl mt-4 hover:bg-pink-600 transition-all"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 3, duration: 0.8 },
          }}
        >
          Next page
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Welcome;
