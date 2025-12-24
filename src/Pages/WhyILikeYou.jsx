import { useState } from "react";
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
      title: "Your Face",
      reason:
        "每次看到你的臉我都是覺得妳很漂亮。我真的覺得妳是我認識最漂亮的女生之一。",
      icon: "👧",
    },
    {
      title: "Your Hair",
      reason: "我喜歡妳的頭髮，不知道怎麼解釋但是總覺得很有魅力。",
      icon: "💇‍♀️",
    },
    {
      title: "Your Hands",
      reason:
        "牽著妳的手我才發現原來我可以這麼放鬆，這麼安心。也對之前不小心弄痛妳的手感到很抱歉。",
      icon: "🤚",
    },
    {
      title: "The Perfect Smile",
      reason:
        "妳笑起來真的非常漂亮，特別是在吃蛋糕的時候，或者是看到我踩到狗屎的時候（雖然很壞但我喜歡妳笑得那麼開心）。希望你能多笑一點。",
      icon: "🍰",
    },
    {
      title: "Our Walks",
      reason:
        "我很喜歡跟你一起散步。以前我不太喜歡散步，也不太想去公園，可是只要跟你在一起就會覺得很開心。你也願意跟我一起走路去虎頭山，那天我真的開心極了。",
      icon: "👫",
    },
    {
      title: "Glasses Look",
      reason:
        "這個我已經跟你說了很多次了。妳戴眼鏡的樣子真的很可愛，也不知道要怎麼解釋啦，反正我很喜歡 (沒在逼你戴眼鏡...)。",
      icon: "👓",
    },
    {
      title: "Your Voice",
      reason:
        "妳的聲音真的很好聽，不管是說話還是唱歌都很好聽。只是有時候我會覺得妳好像會把你那麼好聽的聲音藏起來 (你不懂)。",
      icon: "🎵",
    },
    {
      title: "Your Patience",
      reason:
        "感謝妳願意等我。我知道妳在戀愛方面的經驗比我豐富，但妳願意配合我這麼慢的步調 (雖然我覺得現在已經很快了哈哈)。不然跟你相處我就很尷尬",
      icon: "⏳",
    },
    {
      title: "Pure Comfort",
      reason:
        "每次跟妳聊天，我都覺得非常舒服且自在，好像可以跟妳說任何事情。我都已經給你看別人沒看過的方面。",
      icon: "💬",
    },
    {
      title: "How You Care",
      reason:
        "妳總是很細心地照顧我，幫我整理眉毛 (說實話我到現在還是不懂)，修鼻毛，還幫我買護唇膏，給我驚喜來板橋吃湯圓，這些小細節都讓我感到被愛。謝謝你！",
      icon: "🩹",
    },
    {
      title: "A Great Listener",
      reason:
        "妳會認真聽我說的每一句話，讓我感覺到自己的想法是有被重視的。只是有時候你收到的跟我想說的不太一樣...應該是我講的不夠直接吧。",
      icon: "👂",
    },
    {
      title: "The 'Cat Lines'",
      reason:
        "我喜歡妳臉上鼻子旁邊那兩條線（網上寫的是：笑紋），我覺得那是妳臉上最獨特，最可愛的地方。",
      icon: "🐱",
    },
    {
      title: "Your Scent",
      reason: "妳身上/頭髮有一種很好聞的味道，每次靠近妳的頭都讓我感到很安心。",
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
                  Next
                </button>
              ) : (
                <div className="completed-block">
                  <p className="completion-msg">GAMIN 🔑</p>
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
