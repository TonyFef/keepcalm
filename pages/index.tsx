import Head from "next/head";
import Image from "next/image";
import MainSection from "../components/MainSecion/MainSection";
import Slider from "../components/Slider";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"true"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@500&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.wrapper}>
        <main className={styles.container}>
          <MainSection
            firstImageSrc={"/mainSection/mainContentFirst/big.png"}
            secondImageSrc={"/mainSection/mainContentFirst/small.png"}
          />
          <Slider />
          <MainSection
            firstImageSrc={"/mainSection/mainContentSecond/big.png"}
            secondImageSrc={"/mainSection/mainContentSecond/small.png"}
          />
        </main>
      </div>
    </>
  );
}
