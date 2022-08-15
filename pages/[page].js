import { motion } from "framer-motion";
import Image from "../components/image";
import Title from "../components/title";
import BackLink from "../components/backLink";

export default function Page(props) {
  const page = props.page;

  return (
    <motion.div
      className={"h-screen w-full m-0 p-0 overflow-auto"}
      initial={{ backgroundColor: "#fff" }}
      animate={{ backgroundColor: "#efeaf6" }}
      exit={{
        backgroundColor: "#fff",
        transition: { duration: 0.3, delay: 0.4 },
      }}
      transition={{ duration: 0.3 }}
    >
      <Title>
        <BackLink />
        <h1 className={"text-4xl font-serif "}>
          A special mountain no. {page}
        </h1>
      </Title>

      <div className={"m-6 flex h-[50vh]"}>
        <Image id={page} />
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
