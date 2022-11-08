import Typography from "./Typography";

import styles from "../styles/Footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <Typography
      tag="span"
      text=" © TEST, 1022–2022"
      fontFamily={"Roboto"}
      fontWeight={400}
      fontSize={"14px"}
      lineHeight={"16px"}
      color={"light"}
    />
  </footer>
);

export default Footer;
