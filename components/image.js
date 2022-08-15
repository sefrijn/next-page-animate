import { motion } from "framer-motion";

export default function Image({ id, overview = false }) {
  return (
    <motion.div
      whileHover={overview ? { scale: 1.05 } : {}}
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      className={[" relative w-full h-full"].join(" ")}
      layoutId={`wrapper_image_${id}`}
    >
      <motion.img
        className={"h-full w-full object-cover"}
        src={`/mountain${id}.jpeg`}
      />
    </motion.div>
  );
}
