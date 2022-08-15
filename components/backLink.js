import Link from "next/link";
import { motion } from "framer-motion";

export default function BackLink(props) {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.15 }}
    >
      <Link href={"/"}>
        <a
          className={
            "text-pink-700 uppercase tracking-widest text-sm hover:underline font-semibold"
          }
        >
          ← Go back
        </a>
      </Link>
    </motion.div>
  );
}
