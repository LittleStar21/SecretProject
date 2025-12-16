import { motion } from "framer-motion";

const MainPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full"
    >
      <h1 className="text-xl font-semibold text-pink-600 mb-4 text-center">
        Hi Gamin ♡
      </h1>
      <p className="text-gray-600 text-center">
        這是我做給你的東西，希望你會喜歡。
      </p>
    </motion.div>
  );
};

export default MainPage;
