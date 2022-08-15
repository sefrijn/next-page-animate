import { motion } from "framer-motion";

export default function Image({ main = false, id }) {
  return (
    <motion.div
      layoutId={`wrapper_image_${id}`}
      initial={!main ? { opacity: 0 } : null}
      animate={
        !main ? { opacity: 1, transition: { delay: 0.2 } } : { opacity: 1 }
      }
      exit={!main ? { opacity: 0 } : null}
      transition={{ duration: 0.2 }}
      className={"relative w-full h-full"}
    >
      <img
        className={"shadow-lg h-full w-full object-cover"}
        src={`/mountain${id}.jpeg`}
      />
    </motion.div>
  );
}
