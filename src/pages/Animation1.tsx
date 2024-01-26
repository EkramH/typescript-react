import { motion } from "framer-motion";

const Animation1 = () => {
  const parent = {
    first: { rotate: 0 },
    last: { rotate: 360 },
  };
  return (
    <motion.div
      variants={parent}
      initial="first"
      animate="last"
      transition={{ duration: 2 }}
      drag
      className="size-64 bg-purple-700 rounded-lg"
    ></motion.div>
  );
};

export default Animation1;
