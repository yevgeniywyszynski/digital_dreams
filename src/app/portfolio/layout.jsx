import React from "react";
import styles from "./page.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.generalPortfolioTitle}>Category</h1>
      {children}
    </div>
  );
};

export default Layout;
