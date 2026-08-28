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

const memories = [
  {
    title: "2026/07/18 - 礁溪 - 生日禮物",
    image: jiaoxiLiftPhotoImg,
    descrition: "你送給我的生日禮物，那時候超級無底開心的！",
  },
  {
    title: "2026/07/19 - 在礁溪去咖啡廳",
    image: desertsInJiaoxiImg,
    description: "最近真的太多吃甜點了，不過開心還是最重要！",
  },
  {
    title: "2026/07/19 - 在礁溪火車站等車",
    image: jiaoxiWaitingForCarxImg,
    description: "一起等待，感受平淡而美好的片刻。",
  },
  {
    title: "2026/07/12 - 鳳鳴跑3K",
    image: runInFengmingImg,
    description: "在鳳鳴一起運動散步的日子。",
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
    title: "2026/5/2 - 花蓮喝著牛奶看牛",
    image: happyGirlHualienImg,
    description: "我看的是美女。",
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
    description: "從美國回來，沒忘記給小綠人！",
  },
  {
    title: "2026/3/28 - 到了台中",
    image: taizhongParkImg,
    description: "喜歡去散步的",
  },
  {
    title: "2025/11/01 - 第一次見面 - 桃園",
    image: sushiDateImg,
    description: "我們第一次見面的那天。天氣晴朗，回憶歷歷在目。",
  },
  {
    title: "2025/11/07 - 看電影 (鬼童伴) - 桃園",
    image: moviesImg,
    description: "第一次一起看電影的日子。",
  },
  {
    title: "2025/11/13 - 旅人咖啡館 - 桃園",
    image: thirdImg,
    description: "悠閒地一起喝咖啡、聊天的時光。",
  },
  {
    title: "2025/11/14 - 新北耶誕城 - 板橋",
    image: fourthImg,
    description: "熱鬧的夜景與璀璨的燈飾，珍貴的回憶。",
  },
  {
    title: "2025/11/19 - 鳳鳴散步",
    image: fifthImg,
    description: "微風吹拂散步的日子。",
  },
  {
    title: "2025/11/20 - 石二鍋/耶誕城 - 板橋",
    image: sixthImg,
    description: "紀錄了許多溫馨照片的一天。",
  },
  {
    title: "2025/11/21 - 虎頭山環保公園 - 桃園",
    image: seventhImg,
    description: "夜景很美，這一段路途留下了深刻的回憶。",
  },
  {
    title: "2025/11/22 - 廟街夜市 - 板橋",
    image: eighthImg,
    description: "熱鬧的小吃散步與難忘的味道。",
  },
  {
    title: "2025/11/26 - 鳳鳴",
    image: ninthImg,
    description: "相互理解與陪伴的日子。",
  },
  {
    title: "2025/11/28 - Zootopia 2 - 桃園",
    image: tenthImg,
    description: "一邊看電影，一邊共享歡樂時光。",
  },
  {
    title: "2025/11/29 - Momo & 生日慶祝 - 桃園/板橋",
    image: eleventhImg,
    description: "為特別的日子留下的紀念片刻。",
  },
  {
    title: "2025/11/30 - 好樂迪 - 板橋",
    image: twelfthImg,
    description: "歡笑與歌聲交織的一天。",
  },
  {
    title: "2025/12/04 - 酸菜魚 - 板橋",
    image: thirteenthImg,
    description: "一起品嚐美食，充滿笑容的午晚餐。",
  },
  {
    title: "2025/12/05 - 永吉公園散步 - 鳳鳴",
    image: fourteenthImg,
    description: "公園裡的平淡與美好。",
  },
  {
    title: "2025/12/06 - 西門町與浮洲河濱公園",
    image: fifteenthImg,
    description: "騎著腳踏車，吹著晚風踏青散步。",
  },
  {
    title: "2025/12/10 - 鳳鳴",
    image: sixteenthImg,
    description: "溫馨甜美的回憶角落。",
  },
  {
    title: "2025/12/12 - 風禾公園 - 桃園",
    image: seventeenthImg,
    description: "享受甜甜圈與陽光午後的時光。",
  },
  {
    title: "2025/12/13 - 裕隆城 - 新店",
    image: eighteenthImg,
    description: "手拿飲料漫步商場的悠閒週末。",
  },
  {
    title: "2025/12/14 - 府中 15 與耶誕城 - 板橋",
    image: nineteenthImg,
    description: "展覽與冬夜燈火的交相輝映。",
  },
  {
    title: "2025/12/18 - 春水堂 - 桃園",
    image: twentiethImg,
    description: "好喝的珍珠奶茶與好心情。",
  },
  {
    title: "2025/12/20 - 板橋居家時光",
    image: twentyFirstImg,
    description: "輕鬆溫馨的日常點滴。",
  },
  {
    title: "2025/12/21 - 冬至佳節",
    image: twentySecondImg,
    description: "溫暖心房的冬至紀念。",
  }
];

const SlideshowPage = ({ onBackToMessage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
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
