import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./MainPage.css";

import fotoBerduaImg from "./assets/foto_berdua.jpg";
import fengMingImg from "./assets/fengming.jpg";
import sushiDateImg from "./assets/first_park.jpg";
import fotoCallImg from "./assets/foto_call.png";

import WhyILikeYou from "./WhyILikeYou";
import WhyYouLikeMe from "./WhyYouLikeMe";
import MemoriesPage from "./MemoriesPage";
import MorePage from "./MorePage";

const MainPage = () => {
  // 0: Main Hub
  // 1: Why I like you
  // 2: Memories
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentState]);

  const whyILikeYouButtonCallback = () => {
    setCurrentState(1);
  };

  const whyYouLikeMeButtonCallback = () => {
    setCurrentState(2);
  };

  const memoriesButtonCallback = () => {
    setCurrentState(3);
  };

  const moreButtonCallback = () => {
    setCurrentState(4);
  };

  const cards = [
    {
      title: "What I Like about You",
      image: fotoBerduaImg,
      imageAlt: "foto-berdua-img",
      description: null,
      buttonCallback: whyILikeYouButtonCallback,
    },
    {
      title: "What You Like about Me",
      image: fengMingImg,
      imageAlt: "foto-berdua-img",
      description: null,
      buttonCallback: whyYouLikeMeButtonCallback,
    },
    {
      title: "Our Memories",
      image: sushiDateImg,
      imageAlt: "sushi-date-img",
      description: null,
      buttonCallback: memoriesButtonCallback,
    },
    {
      title: "More",
      image: fotoCallImg,
      imageAlt: "no-image",
      description: null,
      buttonCallback: moreButtonCallback,
    },
  ];

  return (
    <div className="main-page-container">
      {currentState === 0 && (
        <>
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
        </>
      )}
      {currentState === 1 && (
        <WhyILikeYou
          onBackButtonClicked={() => setCurrentState(0)}
        ></WhyILikeYou>
      )}
      {currentState === 2 && (
        <WhyYouLikeMe
          onBackButtonClicked={() => setCurrentState(0)}
        ></WhyYouLikeMe>
      )}
      {currentState === 3 && (
        <MemoriesPage
          onBackButtonClicked={() => setCurrentState(0)}
        ></MemoriesPage>
      )}
      {currentState === 4 && (
        <MorePage onBackButtonClicked={() => setCurrentState(0)}></MorePage>
      )}
    </div>
  );
};

export default MainPage;
