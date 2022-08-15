import Image from "../components/image";
import Title from "../components/title";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const { page, prev } = router.query;
  const [main, setMain] = useState(prev ? prev : "");

  useEffect(() => {
    if (page) setMain(page);
  }, [page]);

  return (
    <div className={"h-screen w-full m-0 p-0 overflow-auto bg-white"}>
      <Title>
        <h1 className={"text-slate-700 text-4xl font-serif "}>
          Welcome to nature
        </h1>
      </Title>
      <div className={"m-12 flex gap-12"}>
        {[...Array(3)].map((x, id) => (
          <Link key={id} href={"/" + id}>
            <motion.a
              whileHover={{ scale: 1.05 }}
              className={"cursor-pointer block h-60 w-1/3"}
            >
              <Image main={main === id.toString()} id={id} />
            </motion.a>
          </Link>
        ))}
      </div>
    </div>
  );
}
