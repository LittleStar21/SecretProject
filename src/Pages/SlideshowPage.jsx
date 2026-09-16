import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SlideshowPage.css";

// Memory Images
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
import thirteenthImg from "./assets/memories/thirteenth-photo.jpg";
import fourteenthImg from "./assets/memories/fourteenth-photo.jpg";
import fifteenthImg from "./assets/memories/fifteenth-photo.jpg";
import sixteenthImg from "./assets/memories/sixteenth-photo.jpg";
import seventeenthImg from "./assets/memories/seventeenth-photo.jpg";
import eighteenthImg from "./assets/memories/eighteenth-photo.jpg";
import nineteenthImg from "./assets/memories/nineteenth-photo.jpg";
import twentiethImg from "./assets/memories/twentieth-photo.jpg";
import twentyFirstImg from "./assets/memories/twenty-first-photo.jpg";
import twentySecondImg from "./assets/memories/twenty-second-photo.jpg";

// Goodbye Memories
import arriveAtHualienImg from "./assets/memories/goodbye/arrive_at_hualien.jpg";
import desertsInJiaoxiImg from "./assets/memories/goodbye/deserts_in_jiaoxi.jpg";
import eatingSuancaiyuImg from "./assets/memories/goodbye/eating_suancaiyu.jpg";
import happyCarHualienImg from "./assets/memories/goodbye/happy_car_huanlien.jpg";
import happyGirlHualienImg from "./assets/memories/goodbye/happy_girl_hualien.jpg";
import jiaoxiLiftPhotoImg from "./assets/memories/goodbye/jiaoxi_lift_photo.jpg";
import jiaoxiWaitingForCarxImg from "./assets/memories/goodbye/jiaoxi_waiting_for_carx.jpg";
import run10kImg from "./assets/memories/goodbye/run10k.jpg";
import runInFengmingImg from "./assets/memories/goodbye/run_in_fengming.jpg";
import taizhongParkImg from "./assets/memories/goodbye/taizhong_park.jpg";
import xiaolurenImg from "./assets/memories/goodbye/xiaoluren.jpg";
import frogFrontImg from "./assets/memories/goodbye/frog_front.jpg";
import frogBackImg from "./assets/memories/goodbye/frog_back.jpg";

const memories = [
  {
    title: "2025/12/24 - 一切的開始",
    image: frogFrontImg,
    description: "感謝你給我最好的禮物，畫得很不錯！",
  },
  {
    title: "2025/12/24 - 承諾和希望",
    image: frogBackImg,
    description: "真的感謝你！希望你都過得好好的，身體健康，天天開心！(Sorry我把禮物送給別人了😭)",
  },
  {
    title: "2026/07/18 - 礁溪 - 生日禮物",
    image: jiaoxiLiftPhotoImg,
    description: "你送給我的生日禮物，那時候超級無底開心的！真的！",
  },
  {
    title: "2026/07/19 - 在礁溪去咖啡廳",
    image: desertsInJiaoxiImg,
    description: "最近真的太多吃甜點了，不過開心還是最重要！",
  },
  {
    title: "2026/07/19 - 在礁溪火車站等車",
    image: jiaoxiWaitingForCarxImg,
    description: "火車沒來不知道要幹嘛就看一下佳旻的魅力",
  },
  {
    title: "2026/07/12 - 鳳鳴跑3K",
    image: runInFengmingImg,
    description: "在鳳鳴一起運動散步的日子。原本想跑5K但真的很累哈哈哈。希望你還會繼續跑步喔！",
  },
  {
    title: "2026/6/6 一 身體不舒服，還陪我去吃飯",
    image: eatingSuancaiyuImg,
    description: "雖然身體不舒服，還是陪我吃飯，謝謝你  ",
  },
  {
    title: "2026/5/2 - 花蓮順風開車！也是佳旻最幸福的回憶",
    image: happyCarHualienImg,
    description: "在車裡充滿歡笑的時光。我也很開心的！",
  },
  {
    title: "2026/5/2 - 花蓮的好風景",
    image: happyGirlHualienImg,
    description: "看著漂亮的風景和漂亮的佳旻：）",
  },
  {
    title: "2026/5/1 - 到花蓮了",
    image: arriveAtHualienImg,
    description: "很多幸福和難過的開始XD。",
  },
  {
    title: "2026/04/26 - 10K跑步完成了",
    image: run10kImg,
    description: "第一次參加跑步活動，又累又開心。真想要我們多點去跑步 :(",
  },
  {
    title: "2026/04/21 - 小綠人",
    image: xiaolurenImg,
    description: "從美國回來，沒忘記給小綠人！請你好好照顧它，因為它什麼都沒有錯吧",
  },
  {
    title: "2026/3/28 - 到了台中",
    image: taizhongParkImg,
    description: "喜歡去散步的",
  },
  {
    title: "025/11/1 - 第一次見面 - 桃園",
    image: sushiDateImg,
    description: "這是我們第一次見面。我那時候真的很緊張，不知道該說什麼，該做什麼，但只要跟你在一起，我就覺得很開心。",
  },
  {
    title: "2025/11/07 - 看電影 (鬼童伴) - 桃園",
    image: moviesImg,
    description: "這是我第一次跟女生兩個人一起看電影。我覺得電影其實普普通通，但那天我緊張到心跳110 bpm。都怪你！",
  },
  {
    title: "2025/11/13 - 旅人咖啡館 - 桃園店",
    image: thirdImg,
    description: '我本來是想要和他一起撐一把傘。但是她忽然拿出來自己的傘。"你喜歡的人不是浪漫的人。"',
  },
  {
    title: "2025/11/14 - 新北耶誕城 - 板橋",
    image: fourthImg,
    description: "感謝你特地來板橋找我。我知道你很累，但你還是來了。那天我真的很珍惜。你那天要是沒來我可能會考慮一些事 (開玩笑的)",
  },
  {
    title: "2025/11/19 - 鳳鳴",
    image: fifthImg,
    description: "那天我心裡只有一個想法：嗯，你真的很漂亮，他是真的喜歡我嗎？感覺我不是她的level...",
  },
  {
    title: "2025/11/20 - 石二鍋/耶誕城 - 板橋",
    image: sixthImg,
    description: "那天拍了很多照片。後來發現只要是跟你一起，怎麼拍都好看。我覺得我們真的需要多點問別人幫忙拍照。他們拍的很好看",
  },
  {
    title: "2025/11/13 - 走路去虎頭山環保公園 - 桃園",
    image: seventhImg,
    description: "我記得吃晚餐時我真的想要立刻回家...不過走到去頭山去真的很好玩，也是第一次看到你很幸福所以我很開心，雖然那是因為我踩到狗屎。",
  },
  {
    title: "2025/11/22 - 府中走到廟街夜市 - 板橋",
    image: eighthImg,
    description: "你逼我吃苦瓜和香菜！不過那一天我真的覺得什麼都好吃又好玩。",
  },
  {
    title: "2025/11/26 - 散步😭 - 鳳鳴",
    image: ninthImg,
    description: "有些時候我們也會不開心。對不起又讓你哭了，我希望以後能給你更多安心和快樂 (雖然那時候是你想要推開我😡)",
  },
  {
    title: "2025/11/28 - Zootopia 2 - 桃園",
    image: tenthImg,
    description: "不知道為什麼那天沒拍很多照片...是不是不愛了呢...電影其實就那樣，但你還是一樣很漂亮！",
  },
  {
    title: "2025/11/29 - Momo (桃園) + 第一次喝酒 (板橋) + 鄭佳旻生日",
    image: eleventhImg,
    description: "鄭佳旻，生日快樂！！！不好意思叔叔阿姨進去你們家，也不好意思把蛋糕放在你們家的冰箱裡...",
  },
  {
    title: "025/11/30 - 楊聰恩家，好樂迪 - 板橋",
    image: twelfthImg,
    description: "你本來就很好看，沒想到唱歌更犯規，音準極佳 (並不是五音不全)，我完全變成你的粉絲了",
  },
  {
    title: "2025/12/4 - 酸菜魚 - 板橋",
    image: thirteenthImg,
    description: "酸菜魚很好吃，但你為什麼沒有點油條呢？還有我想請問你：你這裡在看什麼？",
  },
  {
    title: "2025/12/5 - 永吉公園散步 - 鳳鳴",
    image: fourteenthImg,
    description: "去桃園就是為了找你然後吃麥當勞？聽起來很笨！",
  },
  {
    title: "2025/12/6 - 西門町密室逃脫/騎Ubike/浮洲河濱公園散步/壽司郎",
    image: fifteenthImg,
    description: "簡單來說就是一個超好玩的一天，除了我們玩的最後一關 (真的很笨)",
  },
  {
    title: "2025/12/10 - 散步 - 鳳鳴",
    image: sixteenthImg,
    description: "蛋糕帶來的幸福確實很短，但總是比楊聰恩給的多。希望你跟我以後也能找到長久的幸福",
  },
  {
    title: "2025/12/12 - 風禾公園/金三順韓國料理 - 桃園",
    image: seventeenthImg,
    description: "又是因為吃甜甜圈才能這麼開心...",
  },
  {
    title: "2025/12/13 - 裕隆城 - 新店區",
    image: eighteenthImg,
    description: "喝飲料時也會讓你這麼開心哦...",
  },
  {
    title: "2025/12/14 - 府中 15《感覺氣OFF/ON》, 新北歡樂耶誕城 - 板橋",
    image: nineteenthImg,
    description: "幹嘛那麼開心，有點忘記那天做了什麼，也不知道要寫什麼了哈哈。對了，謝謝你買給我唇膏。",
  },
  {
    title: "2025/12/18 - 新光三越春水堂 / 散步 - 桃園",
    image: twentiethImg,
    description: "雖然有點模糊但還是很好看！不可以抱怨！春水堂很好吃，給你滿分！",
  },
  {
    title: "2025/12/20 - 楊聰恩家",
    image: twentyFirstImg,
    description: "騙我要玩switch，然後怎麼會忘記拍照呢？不愛了！可是謝謝你修了我的眉毛和鼻毛！我感受得到你的愛！",
  },
  {
    title: "2025/12/21 - 冬至送幸福給楊聰恩",
    image: twentySecondImg,
    description: "這是第一次有一個女生來我家給我吃的，而且那個女生是我喜歡的！真的謝謝妳！",
  }
];

const SlideshowPage = ({ onBackToMessage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [direction, setDirection] = useState(1);

  // Preload Images
  useEffect(() => {
    memories.forEach((mem) => {
      const img = new Image();
      img.src = mem.image;
    });
  }, []);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % memories.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length);
  }, []);

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPlaying, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === " ") setIsPlaying((prev) => !prev);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  const currentMemory = memories[currentIndex];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="slideshow-page-container">
      {/* Top Header Controls */}
      <header className="slideshow-header">
        <button className="back-btn" onClick={onBackToMessage}>
          ← 回到主頁
        </button>

        <div className="slideshow-title">Photo Memories</div>

        <div className="slideshow-controls">
          <button
            className={`play-pause-btn ${isPlaying ? "playing" : ""}`}
            onClick={() => setIsPlaying(!isPlaying)}
            title={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
          >
            {isPlaying ? "⏸ 暫停" : "▶ 繼續"}
          </button>
        </div>
      </header>

      {/* Main Slideshow Stage */}
      <div className="slideshow-stage">
        <button className="nav-arrow left" onClick={handlePrev} title="Previous Photo">
          ‹
        </button>

        <div className="slideshow-card">
          <div className="image-wrapper">
            <AnimatePresence custom={direction} mode="wait">
              <motion.img
                key={currentIndex}
                src={currentMemory.image}
                alt={currentMemory.title}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="slideshow-image"
              />
            </AnimatePresence>
          </div>

          <motion.div
            key={`info-${currentIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="memory-info"
          >
            <div className="memory-header-info">
              <h2 className="memory-title">{currentMemory.title}</h2>
              <span className="photo-counter">
                {currentIndex + 1} / {memories.length}
              </span>
            </div>
            <p className="memory-description">{currentMemory.description}</p>
          </motion.div>
        </div>

        <button className="nav-arrow right" onClick={handleNext} title="Next Photo">
          ›
        </button>
      </div>

      {/* Bottom Thumbnail Strip */}
      <div className="thumbnail-strip">
        {memories.map((mem, idx) => (
          <button
            key={idx}
            className={`thumbnail-item ${idx === currentIndex ? "active" : ""}`}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
          >
            <img src={mem.image} alt={`Thumb ${idx + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SlideshowPage;
