import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const BatteryReplacement = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "1.2 1"],
  });

  const scaleValues = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityValues = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  const xValue = useTransform(scrollYProgress, [0, 1], [-1000, 1]);

  return (
    <motion.div
      className="bg-red-400 h-[415px] rounded-2xl col-span-12"
      style={{ scale: scaleValues, opacity: opacityValues, x: xValue }}
      ref={componentRef}
    ></motion.div>
  );
};

export default BatteryReplacement;
