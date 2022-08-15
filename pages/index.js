import Image from "../components/image";
import Title from "../components/title";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Title>
        <h1 className={"text-4xl font-serif "}>Welcome to nature</h1>
      </Title>

      <div className={"m-12 flex gap-12"}>
        {[...Array(3)].map((x, id) => (
          <Link key={id} href={"/" + id}>
            <motion.a
              whileHover={{ scale: 1.05 }}
              className={"cursor-pointer block h-60 w-1/3"}
            >
              <Image overview id={id} />
            </motion.a>
          </Link>
        ))}
      </div>
    </div>
  );
}
