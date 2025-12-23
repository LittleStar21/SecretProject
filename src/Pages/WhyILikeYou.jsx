import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./WhyILikeYou.css";

const WhyILikeYou = ({ onBackButtonClicked }) => {
  const [step, setStep] = useState(0);

  const questSteps = [
    {
      title: "First Impression",
      reason:
        "第一次見到妳的時候，對我來說就像是看到天使一樣。那種震撼和美感，我到現在都還清晰地記得。",
      icon: "😇",
    },
    {
      title: "Your Hair",
      reason:
        "我喜歡妳的頭髮，看著妳整理頭髮或是隨風飄動的樣子，總覺得很有魅力。",
      icon: "💇‍♀️",
    },
    {
      title: "The Perfect Smile",
      reason:
        "妳笑起來真的非常漂亮，特別是在吃蛋糕的時候，或者是看到我踩到狗屎的時候（雖然很壞但我喜歡妳笑得那麼開心）。",
      icon: "🍰",
    },
    {
      title: "Our Walks",
      reason: "我喜歡在散步時牽著妳的手，那種掌心的溫度讓我覺得很踏實。",
      icon: "👫",
    },
    {
      title: "Glasses Look",
      reason: "妳戴眼鏡的樣子真的很可愛，有一種特別的反差萌，我很喜歡。",
      icon: "👓",
    },
    {
      title: "Your Voice",
      reason: "妳的聲音很好聽，聽妳說話對我來說是一種享受，總覺得甜甜的。",
      icon: "🔊",
    },
    {
      title: "Your Patience",
      reason:
        "謝謝妳願意等我。我知道妳在戀愛方面的經驗比我豐富，但妳願意配合我緩慢的步調，這對我意義重大。",
      icon: "⏳",
    },
    {
      title: "Pure Comfort",
      reason: "每次跟妳聊天，我都覺得非常舒服且自在，好像可以跟妳說任何事情。",
      icon: "💬",
    },
    {
      title: "How You Care",
      reason:
        "妳總是很細心地照顧我，幫我整理眉毛、修鼻毛，還幫我買護唇膏，這些小細節都讓我感到被愛。",
      icon: "🩹",
    },
    {
      title: "A Great Listener",
      reason: "妳會認真聽我說的每一句話，讓我感覺到自己的想法是有被重視的。",
      icon: "👂",
    },
    {
      title: "The 'Cat Lines'",
      reason:
        "我喜歡妳臉上鼻子旁邊那兩條線（笑紋），我覺得那是妳臉上最獨特、最可愛的地方。",
      icon: "🐱",
    },
    {
      title: "Your Scent",
      reason: "妳身上有一種很好聞的味道，每次靠近妳都讓我感到很安心。",
      icon: "🌸",
    },
    {
      title: "Because It's You",
      reason: "最後一個理由：因為妳就是妳，這就足夠了。",
      icon: "💍",
    },
  ];

  return (
    <div className="quest-page-container">
      <div className="quest-header">
        <button onClick={onBackButtonClicked} className="exit-btn">
          ✕ EXIT
        </button>
        <div className="progress-bar-track">
          <motion.div
            className="progress-bar-fill"
            animate={{ width: `${((step + 1) / questSteps.length) * 100}%` }}
          />
        </div>
        <div className="step-counter">
          {step + 1} / {questSteps.length}
        </div>
      </div>

      <div className="quest-content-area">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="quest-card"
          >
            <div className="level-tag">Reason #{step + 1}</div>
            <div className="quest-icon">{questSteps[step].icon}</div>
            <h2 className="quest-title">{questSteps[step].title}</h2>
            <p className="reason-text">{questSteps[step].reason}</p>

            <div className="actions">
              {step < questSteps.length - 1 ? (
                <button
                  className="next-discovery-btn"
                  onClick={() => setStep(step + 1)}
                >
                  Approve
                </button>
              ) : (
                <div className="completed-block">
                  <p className="completion-msg">
                    {questSteps.length} Reasons Unlocked! 🏆
                  </p>
                  <button
                    className="finish-quest-btn"
                    onClick={onBackButtonClicked}
                  >
                    Return to Main
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WhyILikeYou;
