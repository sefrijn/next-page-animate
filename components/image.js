import { motion } from "framer-motion";

export default function Image({ id }) {
  return (
    <motion.div
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.2 }}
      className={"relative w-full h-full"}
      layoutId={`wrapper_image_${id}`}
    >
      <motion.img
        className={"h-full w-full object-cover"}
        src={`/mountain${id}.jpeg`}
      />
    </motion.div>
  );
}
