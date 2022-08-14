import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  console.log(router.route);
  return (
    // <Component key={router.route} {...pageProps} />

    <AnimatePresence
      exitBeforeEnter
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Component key={router.route} {...pageProps} />

      {/*<Component key={Math.random()} {...pageProps} />*/}
    </AnimatePresence>
  );
}

export default MyApp;
