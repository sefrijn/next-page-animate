import { motion } from "framer-motion";

export default function Image({ main = false, id }) {
  //  Conditionally enable or disable the motion props
  //  Main is true when this Image component is clicked or shown as full size
  const variants = {
    initial: !main ? { opacity: 0 } : null,
    animate: !main
      ? { opacity: 1, transition: { delay: 0.2 } }
      : { opacity: 1 },
    exit: !main ? { opacity: 0 } : null,
  };

  return (
    <motion.div
      layoutId={`wrapper_image_${id}`}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
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
