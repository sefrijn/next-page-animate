import Image from "../components/image";
import Title from "../components/title";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Title>
        <h1 className={"text-4xl font-serif "}>Welcome to nature</h1>
      </Title>

      <div className={"m-12 flex gap-12"}>
        {[...Array(3)].map((x, i) => {
          const id = i + 1;
          return (
            <Link key={id} href={"/" + id}>
              <a className={"block h-60 w-1/3"}>
                <Image overview id={id} />
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
