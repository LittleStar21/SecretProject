import { motion } from "framer-motion";
import "./GoodbyePage.css";
import loveRabbitImg from "./assets/love_rabbit_woaini.png";

const GoodbyePage = ({ onStartSlideshow }) => {
  return (
    <div className="goodbye-page-container">
      <motion.div
        className="goodbye-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="goodbye-header">
          <img className="goodbye-icon-img" src={loveRabbitImg} alt="Love Rabbit" />
          <h1 className="goodbye-title">感謝你給過我的一切</h1>
          <p className="goodbye-subtitle">雖然故事已結束了，但留下的美好回憶依然珍貴</p>
        </div>

        <div className="goodbye-divider" />

        <div className="goodbye-message">
          <p>
            我不知道你是否會看到這些話，但如果你看到了，我想讓你知道：回頭看這8個月，我很珍惜我們一起走過的時間，每一個約會，以及為這段感情付出的心意。你曾帶給我很多真實的快樂，我也從不後悔給過你的真心和關懷。
            我知道你最近承擔了很大的壓力，受了很多委屈，也覺得我們已經走到無法再給我們再一次機會了。我很想說對不起。我其實真的沒想到我們的故事就結束了。
            雖然我們的想法和價值觀有很多不同，但是我還有很多事想要跟你一起做，不過我還是會尊重你的決定。不管你怎麼說，我想跟你說，我真的真的很愛你喔～
          </p>
          <p>
            真心地祝你未來內心平靜，一切順利。保重。我是楊聰恩！
          </p>
        </div>

        <div className="goodbye-action">
          <button className="view-slideshow-btn" onClick={onStartSlideshow}>
            <span>點我</span>
            <span className="arrow">→</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default GoodbyePage;
