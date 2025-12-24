import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./WhyYouLikeMe.css";

const WhyYouLikeMe = ({ onBackButtonClicked }) => {
  const [selected, setSelected] = useState([]);

  const choices = [
    {
      id: 1,
      text: "我是一個超級棒的聽眾",
      response: "我也覺得。。。但感覺你也是一樣吧。",
    },
    {
      id: 2,
      text: "我很帥",
      response:
        "不要亂講！我覺得你眼睛瞎了...而且，是你很漂亮，我只是一般般的。",
    },
    {
      id: 3,
      text: "我的眼睛",
      response:
        "雖然我不太懂，但是這個我可以接受。畢竟以前有些人也是這麼覺得。",
    },
    {
      id: 4,
      text: "我很聰明",
      response: "可是我真的覺得我不聰明欸。",
    },
    {
      id: 5,
      text: "我很可愛",
      response: "真不懂是什麼意思。我覺得你在敷衍我",
    },
    {
      id: 6,
      text: "即使步調很慢，我也會認真對待這段感情",
      response: "Hmmm...是嗎？",
    },
    {
      id: 7,
      text: "我踩到狗屎還能逗妳開心的能力",
      response: "希望以後有別的能讓你開心的事情。我不能每天都踩到狗屎...",
    },
    {
      id: 8,
      text: "我很會照顧人（雖然通常是妳在照顧我）",
      response: "以後換我多照顧妳一點，把妳寵壞。LOVES 🔑",
    },
    {
      id: 9,
      text: "我的笑話",
      response: "不可能，因為你說過我的笑點很低。而且你說了我很難聊天😔",
    },
  ];

  const handleSelect = (id) => {
    if (!selected.includes(id)) {
      setSelected([...selected, id]);
    }
  };

  return (
    <div className="chat-page-container">
      <div className="chat-header">
        <button onClick={onBackButtonClicked} className="exit-btn">
          ← Back
        </button>
        <h1 className="chat-title">What do you like about me?</h1>
      </div>

      <div className="choices-grid">
        {choices.map((choice) => (
          <div key={choice.id} className="choice-wrapper">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`choice-card ${selected.includes(choice.id) ? "selected" : ""}`}
              onClick={() => handleSelect(choice.id)}
            >
              {choice.text}
            </motion.button>

            <AnimatePresence>
              {selected.includes(choice.id) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 65 }}
                  className="my-response-bubble"
                >
                  {choice.response}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyYouLikeMe;
