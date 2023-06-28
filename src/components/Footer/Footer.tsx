import Column from "./Column";
import footerLogo from "../../assets/logoFooter.svg";
import styles from "./style.module.scss";
import { DATAFOTTER } from "../../util/data/dataList/dataFooter";

function Footer() {
  return (
    <footer className="blue-bg">
      <div className={styles["footer-nav"]}>
        <div className={styles["join-community"]}>
          <img src={footerLogo} alt="footer-logo" width="130" height="94" />
          <a className={styles["footer-btn"]} href="#!">
            JOIN THE COMMUNITY
          </a>
        </div>
        {DATAFOTTER.map((col) => {
          return (
            <Column key={col.title} title={col.title} children={col.children} />
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;
