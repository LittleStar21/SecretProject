import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "./MemoriesPage.css";

import sushiDateImg from "./assets/sushi_date.jpg";
import moviesImg from "./assets/memories/movies.jpg";
import thirdImg from "./assets/memories/third-photo.jpg";
import fourthImg from "./assets/memories/fourth-photo.jpg";
import fifthImg from "./assets/memories/fifth-photo.jpg";
import sixthImg from "./assets/memories/sixth-photo.jpg";
import seventhImg from "./assets/memories/seventh-photo.jpg";
import eighthImg from "./assets/memories/eighth-photo.jpg";
import ninthImg from "./assets/memories/ninth-photo.jpg";
import tenthImg from "./assets/memories/tenth-photo.jpg";
import eleventhImg from "./assets/memories/eleventh-photo.jpg";
import twelfthImg from "./assets/memories/twelfth-photo.jpg";
import thirtheenthImg from "./assets/memories/thirtheenth-photo.jpg";
import fourteenthImg from "./assets/memories/fourteenth-photo.jpg";
import fifteenthImg from "./assets/memories/fifteenth-photo.jpg";
import sixteenthImg from "./assets/memories/sixteenth-photo.jpg";
import seventeenthImg from "./assets/memories/seventeenth-photo.jpg";
import eighteenthImg from "./assets/memories/eighteenth-photo.jpg";
import nineteenthImg from "./assets/memories/nineteenth-photo.jpg";
import twentiethImg from "./assets/memories/twentieth-photo.jpg";
import twentyFirstImg from "./assets/memories/twenty-first-photo.jpg";
import twentySecondImg from "./assets/memories/twenty-second-photo.jpg";

const MemoriesPage = ({ onBackButtonClicked }) => {
  const [index, setIndex] = useState(0);
  const memories = [
    {
      title: "2025/11/1 - 第一次見面 - 桃園",
      image: sushiDateImg,
      imageAlt: "sushi-date-img",
      description:
        "這是我們第一次見面。我那時候都很緊張，不知道該說什麼該做什麼，但我都很開心。",
      happiness: 5,
    },
    {
      title: "2025/11/7 - 看電影 (鬼童伴) - 桃園",
      image: moviesImg,
      imageAlt: "watch-movie-img",
      description: "電影雖然有點爛，但是我緊張死了(110 bpm都怪你)。",
      happiness: 4,
    },
    {
      title: "2025/11/13 - 旅人咖啡館 - 桃園店",
      image: thirdImg,
      imageAlt: "cafe-img",
      description: '"你的女朋友不是浪漫的人..."',
      happiness: 4,
    },
    {
      title: "2025/11/14 - 新北耶誕城 - 板橋",
      image: fourthImg,
      imageAlt: "fourth-img",
      description:
        "感謝你來板橋找我，看得出來你很累。你那天要是沒來我可能會考慮一些事 (開玩笑的)",
      happiness: 5,
    },
    {
      title: "2025/11/19 - 鳳鳴",
      image: fifthImg,
      imageAlt: "fifth-img",
      description: "嗯，你很漂亮",
      happiness: 5,
    },
    {
      title: "2025/11/20 - 石二鍋/耶誕城 - 板橋",
      image: sixthImg,
      imageAlt: "sixth-img",
      description: "我覺得我們真的需要多點問別人幫忙拍照。他們拍的很好看",
      happiness: 4,
    },
    {
      title: "2025/11/13 - 走路去虎頭山環保公園 - 桃園",
      image: seventhImg,
      imageAlt: "seventh-img",
      description:
        "我記得吃晚餐時我真的想要立刻回家 (因為你一直都在看手機，完全不理我講話)。不過走到虎頭山時我超級無底開心，所以給你滿分",
      happiness: 5,
    },
    {
      title: "2025/11/22 - 府中走到廟街夜市 - 板橋",
      image: eighthImg,
      imageAlt: "eighth-img",
      description: "你逼我吃香菜！其實我一整天都覺得很好玩很好吃",
      happiness: 5,
    },
    {
      title: "2025/11/26 - 散步😭 - 鳳鳴",
      image: ninthImg,
      imageAlt: "ninth-img",
      description:
        "對不起又讓你哭了，希望你跟我的時候都開開心心的，但還是討厭你！",
      happiness: 3,
    },
    {
      title: "2025/11/28 - Zootopia 2 - 桃園",
      image: tenthImg,
      imageAlt: "tenth-img",
      description: "不知道為什麼那天沒拍很多照片...是不是不愛了...",
      happiness: 4,
    },
    {
      title: "2025/11/29 - Momo (桃園) + 第一次喝酒 (板橋) + 鄭佳旻生日",
      image: eleventhImg,
      imageAlt: "eleventh-img",
      description: "生日快樂！！！",
      happiness: 5,
    },
    {
      title: "2025/11/30 - 楊聰恩家，好樂迪 - 板橋",
      image: twelfthImg,
      imageAlt: "twelfth-img",
      description: "你本來就很好看，結果唱歌更犯規，我完全變成你的粉絲了",
      happiness: 5,
    },
    {
      title: "2025/12/4 - 酸菜魚 - 板橋",
      image: thirtheenthImg,
      imageAlt: "thirtheenth-img",
      description: "酸菜魚很好吃，但你這裡在看啥？",
      happiness: 5,
    },
    {
      title: "2025/12/5 - 永吉公園散步 - 鳳鳴",
      image: fourteenthImg,
      imageAlt: "fourteenth-img",
      description: "去桃園就是為了找你然後吃麥當勞？聽起來很笨！",
      happiness: 5,
    },
    {
      title: "2025/12/6 - 西門町密室逃脫/騎Ubike/浮洲河濱公園散步/壽司郎",
      image: fifteenthImg,
      imageAlt: "fifteenth-img",
      description:
        "簡單來說就是一個超好玩的一天，除了我們玩的最後一關 (真的很笨)",
      happiness: 5,
    },
    {
      title: "2025/12/10 - 散步 - 鳳鳴",
      image: sixteenthImg,
      imageAlt: "sixteenth-img",
      description: "蛋糕帶來的幸福，總是比楊聰恩給的多。希望你跟我也能找到幸福",
      happiness: 5,
    },
    {
      title: "2025/12/12 - 風禾公園/金三順韓國料理 - 桃園",
      image: seventeenthImg,
      imageAlt: "seventeenth-img",
      description: "又是因為吃甜甜圈才能這麼幸福...",
      happiness: 5,
    },
    {
      title: "2025/12/13 - 裕隆城 - 新店區",
      image: eighteenthImg,
      imageAlt: "eighteenth-img",
      description: "喝飲料也會讓你這麼開心哦",
      happiness: 5,
    },
    {
      title: "2025/12/14 - 府中 15《感覺氣OFF/ON》, 新北歡樂耶誕城 - 板橋",
      image: nineteenthImg,
      imageAlt: "nineteenth-img",
      description: "幹嘛那麼開心，有點忘記那天做了什麼",
      happiness: 5,
    },
    {
      title: "2025/12/18 - 新光三越春水堂 / 散步 - 桃園",
      image: twentiethImg,
      imageAlt: "twentieth-img",
      description: "雖然模糊但還是很好看！不可以抱怨！春水堂很好吃，給你滿分！",
      happiness: 5,
    },
    {
      title: "2025/12/20 - 楊聰恩家",
      image: twentyFirstImg,
      imageAlt: "twenty-first-img",
      description: "怎麼會忘記拍照呢？不愛了！",
      happiness: 4,
    },
    {
      title: "2025/12/21 - 冬至送幸福給楊聰恩",
      image: twentySecondImg,
      imageAlt: "twenty-second-img",
      description:
        "這是第一次有一個女生來我家給我吃的，而且那個女生是我喜歡的！真的謝謝妳！",
      happiness: 10,
    },
  ];

  useEffect(() => {
    if (index < memories.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [index, memories.length]);

  return (
    <div>
      {index < memories.length - 1 ? (
        <div className="memories-container">
          <motion.div className="memories-title">Memories</motion.div>
          <div className="memories-cards-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="memories-card-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <div className="memories-card-title">
                  {memories[index].title}
                </div>

                {memories[index].image && (
                  <div className="memories-card-img-container">
                    <img
                      className="memories-card-img"
                      src={memories[index].image}
                      alt={memories[index].imageAlt}
                    />
                  </div>
                )}

                <div className="memories-card-description">
                  {memories[index].description}
                </div>

                <div className="memories-card-happiness">
                  <div>開心度: </div>
                  {"😊".repeat(memories[index].happiness)}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      ) : (
        <div>Empty</div>
      )}
    </div>
  );

  return (
    <div className="memories-container">
      <motion.div className="memories-title">Memories</motion.div>
      <div className="memories-cards-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="memories-card-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="memories-card-title">{memories[index].title}</div>

            {memories[index].image && (
              <div className="memories-card-img-container">
                <img
                  className="memories-card-img"
                  src={memories[index].image}
                  alt={memories[index].imageAlt}
                />
              </div>
            )}

            <div className="memories-card-description">
              {memories[index].description}
            </div>

            <div className="memories-card-happiness">
              <div>開心度: </div>
              {"😊".repeat(memories[index].happiness)}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MemoriesPage;
