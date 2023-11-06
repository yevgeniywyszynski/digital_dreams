import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bannerWrapper}>
        <Image
          fill={true}
          className={styles.imgBanner}
          src="https://images.pexels.com/photos/265144/pexels-photo-265144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="about-us-banner"
        />
        <div className={styles.bannerText}>
          <h1 className={styles.bannerTitle}>Digital Storytellers</h1>
          <h4 className={styles.subtitle}>
            Handcrafting award winning digital experiences
          </h4>
        </div>
      </div>
      <div className={styles.aboutDescriptionWrapper}>
        <div className={styles.contentDiv}>
          <h2 className={styles.aboutDescTitle}>Who Are We?</h2>
          <p className={styles.aboutText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ad
            praesentium non id blanditiis corrupti incidunt voluptas, natus
            fugit eveniet iusto, ullam consectetur. Id quia consectetur et
            aliquam fuga eum? Lorem ipsum dolor sit amet, consectetur. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Iure, ad
            praesentium non id blanditiis corrupti incidunt voluptas, natus
            fugit eveniet iusto, ullam consectetur. Id quia consectetur et
            aliquam fuga eum? Lorem ipsum dolor sit amet, consectetur.
            <br></br>
            <br></br>
            Adipisicing elit. Quod voluptate molestiae obcaecati ad illum
            delectus, nulla vel. Eaque, odit sed! Non omnis sapiente doloribus
            doloremque. Commodi doloremque molestias iure veritatis.
          </p>
        </div>
        <div className={styles.contentDiv}>
          <h2 className={styles.aboutDescTitle}>What We Do?</h2>
          <p className={styles.aboutText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ad
            praesentium non id blanditiis corrupti incidunt voluptas, natus
            fugit eveniet iusto, ullam consectetur. Id quia consectetur et
            aliquam fuga eum? Lorem ipsum dolor sit amet, consectetur
            <br></br>
            <br></br>- Dynamic Websites
            <br></br>
            <br></br>- Fast and Handy
            <br></br>
            <br></br>- Mobile Apps
          </p>
          <Button url="/contact " text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
