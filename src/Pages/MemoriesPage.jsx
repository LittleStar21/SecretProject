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
import pokemonImg from "./assets/memories/gamin-pokemon-photo.jpg";
import xiaochouImg from "./assets/memories/xiaochou-photo.jpg";

const MemoriesPage = ({ onBackButtonClicked }) => {
  const [index, setIndex] = useState(0);
  const memories = [
    {
      title: "2025/11/1 - 第一次見面 - 桃園",
      image: sushiDateImg,
      imageAlt: "sushi-date-img",
      description:
        "這是我們第一次見面。我那時候真的很緊張，不知道該說什麼、該做什麼，但只要跟你在一起，我就覺得很開心。",
      happiness: 5,
    },
    {
      title: "2025/11/7 - 看電影 (鬼童伴) - 桃園",
      image: moviesImg,
      imageAlt: "watch-movie-img",
      description:
        "這是我第一次跟女生兩個人一起看電影。我覺得電影其實普普通通，但那天我緊張到心跳110 bpm。都怪你！",
      happiness: 4,
    },
    {
      title: "2025/11/13 - 旅人咖啡館 - 桃園店",
      image: thirdImg,
      imageAlt: "cafe-img",
      description:
        '我本來是想要和他一起撐一把傘。但是她忽然拿出來自己的傘。"你喜歡的人不是浪漫的人。"',
      happiness: 4,
    },
    {
      title: "2025/11/14 - 新北耶誕城 - 板橋",
      image: fourthImg,
      imageAlt: "fourth-img",
      description:
        "感謝你特地來板橋找我。我知道你很累，但你還是來了。那天我真的很珍惜。你那天要是沒來我可能會考慮一些事 (開玩笑的)",
      happiness: 5,
    },
    {
      title: "2025/11/19 - 鳳鳴",
      image: fifthImg,
      imageAlt: "fifth-img",
      description:
        "那天我心裡只有一個想法：嗯，你真的很漂亮，他是真的喜歡我嗎？感覺我不是她的level...",
      happiness: 5,
    },
    {
      title: "2025/11/20 - 石二鍋/耶誕城 - 板橋",
      image: sixthImg,
      imageAlt: "sixth-img",
      description:
        "那天拍了很多照片。後來發現只要是跟你一起，怎麼拍都好看。我覺得我們真的需要多點問別人幫忙拍照。他們拍的很好看",
      happiness: 4,
    },
    {
      title: "2025/11/13 - 走路去虎頭山環保公園 - 桃園",
      image: seventhImg,
      imageAlt: "seventh-img",
      description:
        "我記得吃晚餐時我真的想要立刻回家...不過走到去頭山去真的很好玩，也是第一次看到你很幸福所以我很開心，雖然那是因為我踩到狗屎。",
      happiness: 5,
    },
    {
      title: "2025/11/22 - 府中走到廟街夜市 - 板橋",
      image: eighthImg,
      imageAlt: "eighth-img",
      description: "你逼我吃香菜！但那一天我真的覺得什麼都好吃又好玩。",
      happiness: 5,
    },
    {
      title: "2025/11/26 - 散步😭 - 鳳鳴",
      image: ninthImg,
      imageAlt: "ninth-img",
      description:
        "有些時候我們也會不開心。對不起又讓你哭了，我希望以後能給你更多安心和快樂 (雖然你那時候想要推開我😡)",
      happiness: 3,
    },
    {
      title: "2025/11/28 - Zootopia 2 - 桃園",
      image: tenthImg,
      imageAlt: "tenth-img",
      description:
        "不知道為什麼那天沒拍很多照片...是不是不愛了呢...電影其實就那樣，但你還是一樣很漂亮！",
      happiness: 4,
    },
    {
      title: "2025/11/29 - Momo (桃園) + 第一次喝酒 (板橋) + 鄭佳旻生日",
      image: eleventhImg,
      imageAlt: "eleventh-img",
      description:
        "鄭佳旻，生日快樂！！！不好意思叔叔阿姨進去你們家，也不好意思把蛋糕放在你們家的冰箱裡...",
      happiness: 5,
    },
    {
      title: "2025/11/30 - 楊聰恩家，好樂迪 - 板橋",
      image: twelfthImg,
      imageAlt: "twelfth-img",
      description:
        "你本來就很好看，沒想到唱歌更犯規，音準極佳 (並不是五音不全)，我完全變成你的粉絲了",
      happiness: 5,
    },
    {
      title: "2025/12/4 - 酸菜魚 - 板橋",
      image: thirtheenthImg,
      imageAlt: "thirtheenth-img",
      description:
        "酸菜魚很好吃，但你為什麼沒有點油條呢？還有我想請問你：你這裡在看什麼？",
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
      description:
        "蛋糕帶來的幸福確實很短，但總是比楊聰恩給的多。希望你跟我以後也能找到長久的幸福",
      happiness: 5,
    },
    {
      title: "2025/12/12 - 風禾公園/金三順韓國料理 - 桃園",
      image: seventeenthImg,
      imageAlt: "seventeenth-img",
      description: "又是因為吃甜甜圈才能這麼開心...",
      happiness: 4,
    },
    {
      title: "2025/12/13 - 裕隆城 - 新店區",
      image: eighteenthImg,
      imageAlt: "eighteenth-img",
      description: "喝飲料時也會讓你這麼開心哦...",
      happiness: 5,
    },
    {
      title: "2025/12/14 - 府中 15《感覺氣OFF/ON》, 新北歡樂耶誕城 - 板橋",
      image: nineteenthImg,
      imageAlt: "nineteenth-img",
      description:
        "幹嘛那麼開心，有點忘記那天做了什麼，也不知道要寫什麼了哈哈。對了，謝謝你買給我唇膏。",
      happiness: 5,
    },
    {
      title: "2025/12/18 - 新光三越春水堂 / 散步 - 桃園",
      image: twentiethImg,
      imageAlt: "twentieth-img",
      description:
        "雖然有點模糊但還是很好看！不可以抱怨！春水堂很好吃，給你滿分！",
      happiness: 5,
    },
    {
      title: "2025/12/20 - 楊聰恩家",
      image: twentyFirstImg,
      imageAlt: "twenty-first-img",
      description:
        "騙我要玩switch，然後怎麼會忘記拍照呢？不愛了！可是謝謝你修了我的眉毛和鼻毛！我感受得到你的愛！",
      happiness: 5,
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

  // Preload all images
  useEffect(() => {
    memories.forEach((memory) => {
      if (memory.image) {
        const img = new Image();
        img.src = memory.image;
      }

      const img = new Image();
      img.src = pokemonImg;
      img.src = xiaochouImg;
    });
  }, []);

  useEffect(() => {
    if (index < memories.length) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [index, memories.length]);

  return (
    <div className="memories-container">
      <motion.div
        className="memories-title"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: "easeOut",
            delay: 0.5,
          },
        }}
      >
        Memories
      </motion.div>
      <AnimatePresence mode="wait">
        {index < memories.length ? (
          <motion.div
            key={index}
            className="memories-cards-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="memories-card-container">
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
                <div>{"😊".repeat(memories[index].happiness)}</div>
              </div>
            </div>
          </motion.div>
        ) : index === memories.length ? (
          <div className="memories-cards-container">
            <motion.div
              key="more"
              className="final-message-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, x: -100 }}
            >
              <div className="memories-card-title">
                ...以及更多以後的點點滴滴
              </div>
              <div className="memories-card-description">
                我們的故事還在繼續，你願意跟我一起探索下去嗎？
              </div>
              <div className="memories-card-img-container">
                <img
                  className="memories-card-img"
                  src={pokemonImg}
                  alt="heart-shaped-photo"
                />
              </div>
              <button
                className="final-message-button"
                onClick={() => setIndex(memories.length + 1)}
              >
                願意
              </button>
            </motion.div>
          </div>
        ) : index === memories.length + 1 ? (
          <div className="memories-cards-container">
            <motion.div
              key="question"
              className="final-message-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className="memories-card-title">最後，我想問妳...</div>
              <div className="memories-card-img-container">
                <img
                  className="memories-card-img"
                  src={xiaochouImg}
                  alt="heart-shaped-photo"
                />
              </div>
              <div className="memories-card-description">
                妳願意當我的女朋友嗎？
              </div>

              <button
                className="final-message-button"
                onClick={() => setIndex(memories.length + 2)}
              >
                我願意
              </button>
              <button
                className="final-message-button-2"
                onClick={() => setIndex(memories.length + 2)}
              >
                我願意
              </button>
            </motion.div>
          </div>
        ) : (
          <motion.div
            className="final-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="final-card-wrapper">
              <motion.div
                className="floating-heart"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ❤️
              </motion.div>

              <h1 className="final-title">SUCCESS!</h1>
              <h2 className="final-subtitle">妳現在有一位新男友了！</h2>

              <div className="final-stats-box">
                <div className="stat-item">
                  <span className="label">男朋友：</span>
                  <span className="value">楊聰恩</span>
                </div>
                <div className="stat-item">
                  <span className="label">女朋友：</span>
                  <span className="value">鄭佳旻</span>
                </div>
                <div className="stat-divider" />
                <div className="stat-date">Established: 2025.12.24</div>
              </div>

              <p className="final-message">
                謝謝妳答應我。我會努力當一個讓妳驕傲、讓妳快樂的男友。
                <br />
                未來的每一頁，我們一起寫。
              </p>

              <button className="final-back-btn" onClick={onBackButtonClicked}>
                Go Back
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MemoriesPage;
