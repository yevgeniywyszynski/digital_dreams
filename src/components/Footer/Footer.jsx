import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>© ywyszyn 2023. All Rights Reserved.</div>
      <div className={styles.footerImgWrapper}>
        <Image
          src="/1.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="facebook"
        />
        <Image
          src="/2.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="insta"
        />
        <Image
          src="/3.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="twiter"
        />
        <Image
          src="/4.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="youtube"
        />
      </div>
    </div>
  );
};

export default Footer;
