import { useState } from "react";
import { motion } from "framer-motion";

import fotoBerduaImg from "./assets/foto_berdua.jpg";
import sushiDateImg from "./assets/first_park.jpg";
import "./MainPage.css";

const MainPage = () => {
  // 0: Main Hub
  // 1: Why I like you
  // 2: Memories
  // 3: Secret
  const [currentState, setCurrentState] = useState(0);

  const whyILikeYouButtonCallback = () => {
    alert("Why I like you");
  };

  const memoriesButtonCallback = () => {
    alert("Memories button");
  };

  const cards = [
    {
      title: "Why I Like You",
      image: fotoBerduaImg,
      imageAlt: "foto-berdua-img",
      description: null,
      buttonCallback: whyILikeYouButtonCallback,
    },
    {
      title: "Memories",
      image: sushiDateImg,
      imageAlt: "sushi-date-img",
      description: null,
      buttonCallback: memoriesButtonCallback,
    },
  ];

  return (
    <div className="main-page-container">
      <motion.div
        className="main-page-title"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 2, ease: "easeOut", delay: 0.5 },
        }}
      >
        A Small World I Made for You
      </motion.div>

      <div className="main-page-cards-container">
        {cards.map((card, cardIdx) => {
          return (
            <motion.div
              key={cardIdx}
              className="main-page-card-container"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 2,
                  ease: "easeOut",
                  delay: cardIdx + 2,
                },
              }}
            >
              <div className="main-page-card-topbar">
                <div className="main-page-card-topbar-green"></div>
                <div className="main-page-card-topbar-yellow"></div>
                <div className="main-page-card-topbar-red"></div>
              </div>

              <div className="main-page-card-title">{card.title}</div>
              <div className="main-page-card-image-container">
                <img
                  className="main-page-card-image"
                  src={card.image}
                  alt={card.imageAlt}
                ></img>
              </div>
              <div className="main-page-card-description">
                {card.description}
              </div>
              <button
                className="main-page-card-button"
                onClick={card.buttonCallback}
              >
                Open
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
