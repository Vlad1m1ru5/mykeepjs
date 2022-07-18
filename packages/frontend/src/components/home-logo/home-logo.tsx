import styles from "./home-logo.module.less";
import logo from "./logo.svg";

const HomeLogo = () => {
  return <img src={logo} className={styles.homeLogo} alt="logo" />;
};

export default HomeLogo;
