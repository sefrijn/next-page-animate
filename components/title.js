import { motion } from "framer-motion";

export default function Title({ children }) {
  return (
    <motion.div
      className={"container text-center py-12"}
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.25, delay: 0.5 },
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
