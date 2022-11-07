import { MainContentProps } from "../../types/types";
import Typography from "../Typography";
import { Image } from "../Image";

import cn from "classnames";

import styles from "../../styles/MainContent.module.scss";

const MainContent = ({
  isImageLeft,
  imageSrc,
  imageWidth,
  imageHeight,
  title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  text = "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  subtext = "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
}: MainContentProps) => {
  console.log(isImageLeft);

  return (
      <section
        className={cn({
          [styles.content]: true,
          [styles["content-reversed"]]: !isImageLeft,
          [styles["content-straight"]]: !!isImageLeft,
        })}
      >
        <div className={styles["content--image"]}>
          <Image src={imageSrc} width={imageWidth} height={imageHeight} />
        </div>
        <div className={styles["content--text"]}>
          <Typography
            tag={"h3"}
            text={title}
            fontSize={"48px"}
            fontFamily={"OrchideaPro"}
            lineHeight={"110"}
          />
          <Typography
            tag={"p"}
            text={text}
            fontSize={"18px"}
            fontFamily={"Manrope"}
            lineHeight={"130"}
          />
          <Typography
            tag={"p"}
            text={subtext}
            fontSize={"18px"}
            fontFamily={"Manrope"}
            lineHeight={"130"}
          />
        </div>
      </section>
  );
};

export default MainContent;