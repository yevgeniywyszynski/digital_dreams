import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Button from "@/components/Button/Button";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.contactTitle}>Lets Keep in Touch</h1>
      <div className={styles.contactWrapper}>
        <div className={styles.contactImgWrapper}>
          <Image
            className={styles.contactImg}
            src="/con2.png"
            fill={true}
            alt="contact-img"
          />
        </div>
        <form className={styles.formContainer}>
          <input
            className={styles.contactInput}
            type="text"
            placeholder="name"
          />
          <input
            className={styles.contactInput}
            type="email"
            placeholder="email"
          />
          <textarea
            className={styles.contactInput}
            cols="30"
            rows="10"
            placeholder="message"
          />
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
