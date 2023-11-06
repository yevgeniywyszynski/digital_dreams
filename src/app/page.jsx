import styles from "./page.module.scss";
import Image from "next/image";
import HomeBg2 from "public/home2-bg.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.homeLeftSide}>
        <h1 className={styles.headerTitle}>Digital Dreams Come True</h1>
        <p className={styles.headerSubtitle}>
          We Craft Websites and Apps with Passion and Innovation, Bringing Your
          Digital Dreams to Life
        </p>
        <Button url="/portfolio" text="BUY NOW" />
      </div>
      <div className={styles.homeImgWrapper}>
        <Image src={HomeBg2} alt="homeImage" className={styles.imgHome} />
      </div>
    </div>
  );
}
