import { motion } from "framer-motion";
import Image from "../components/image";
import Title from "../components/title";
import BackLink from "../components/backLink";
import { useRouter } from "next/router";

export default function Page(props) {
  const id = props.page;
  const router = useRouter();
  const { page } = router.query;

  return (
    <motion.div
      className={"h-screen w-full m-0 p-0 overflow-auto"}
      initial={{ backgroundColor: "var(--color-white)" }}
      animate={{ backgroundColor: "var(--color-sky-100)" }}
      exit={{
        backgroundColor: "var(--color-white)",
        transition: { duration: 0.6, delay: 0.2 },
      }}
      transition={{ duration: 0.6 }}
    >
      <Title>
        <BackLink prev={page} />
        <h1 className={"text-4xl text-stone-600 font-serif "}>
          A special mountain no. {id}
        </h1>
      </Title>

      <div className={"m-6 flex h-[50vh]"}>
        <Image main id={id} />
      </div>
    </motion.div>
  );
}

export async function getStaticProps({ params }) {
  const page = params.page;
  return {
    props: {
      page,
    },
  };
}

export async function getStaticPaths() {
  const routes = [
    { params: { page: "0" } },
    { params: { page: "1" } },
    { params: { page: "2" } },
  ];
  return {
    paths: routes,
    fallback: false,
  };
}
