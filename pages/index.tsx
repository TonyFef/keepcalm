import Head from "next/head";
import Image from "next/image";
import MainSection from "../components/MainSecion/MainSection";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <MainSection
          firstImageSrc={"/mainSection/mainContentFirst/big.png"}
          secondImageSrc={"/mainSection/mainContentFirst/small.png"}
        />
        <MainSection
          firstImageSrc={"/mainSection/mainContentSecond/big.png"}
          secondImageSrc={"/mainSection/mainContentSecond/small.png"}
        />
      </main>
    </div>
  );
}
