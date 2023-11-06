import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectedProtfolioTitle}>Choose a gategory </h1>
      <div className={styles.portdolioItemsWrapper}>
        <Link href="/portfolio/websites" className={styles.portfolioItem}>
          <div className={styles.portfolioCatImgBg}></div>
          <span className={styles.portfilioItemTitle}>Websites</span>
        </Link>
        <Link href="/portfolio/ux_ui" className={styles.portfolioItem}>
          <div className={styles.portfolioCatImgBg2}></div>
          <span className={styles.portfilioItemTitle}>Ux Ui</span>
        </Link>
        <Link href="/portfolio/applications" className={styles.portfolioItem}>
          <div className={styles.portfolioCatImgBg3}></div>
          <span className={styles.portfilioItemTitle}>Applications</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
