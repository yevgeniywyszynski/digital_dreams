import React from "react";
import styles from "./button.module.scss";
import Link from "next/link";

const Button = ({ text, url }) => {
  return (
    <Link href={url} className={styles.container}>
      <button className={styles.btnGreen}>{text}</button>
    </Link>
  );
};

export default Button;
