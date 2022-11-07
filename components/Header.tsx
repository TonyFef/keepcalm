import styles from "../styles/Header.module.scss";
import Typography from "./Typography";
import { Image } from "./Image";

const Header = () => (
  <header className={styles.header}>
    <div className={styles["header-wrapper"]}>
      <div className={styles["header--logo"]}>
        <Image src={"/logo.png"} alt="logo" width={213} height={36} />
      </div>

      <div className={styles["header--phone"]}>
        <a href="tel:+74951234567">
          <Typography
            tag="span"
            text="+7 (495) 123-45-67"
            fontFamily={"Manrope"}
            color={"light"}
          />
        </a>
      </div>
    </div>
  </header>
);

export default Header;
