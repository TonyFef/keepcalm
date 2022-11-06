import Typography from "../Typography";
import MainContent from "./MainContent";

import styles from "../../styles/MainSection.module.scss";
import { MainSectionProps } from "../../types/types";

const MainSection = ({ firstImageSrc, secondImageSrc }: MainSectionProps) => (
  <section className={styles["section"]}>
    <div className={styles["section--title"]}>
      <Typography
        tag="h2"
        text={"ut aliquip ex ea commodo consequat"}
        fontSize={"48px"}
        fontFamily={"OrchideaPro"}
        lineHeight={"130"}
        textTransform={"uppercase"}
      />
    </div>

    <MainContent isImageLeft={true} imageSrc={firstImageSrc} />
    <MainContent isImageLeft={false} imageSrc={secondImageSrc} />
  </section>
);

export default MainSection;
