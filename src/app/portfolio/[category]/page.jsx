"use client";

import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);

  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>{params.category}</h1>
      {data.map((item) => (
        <div key={item.id} className={styles.categoryItem}>
          <div className={styles.categoryLeftSide}>
            <h1 className={styles.categoryItemTitle}>{item.title}</h1>
            <p className={styles.catItemDesc}>{item.desc}</p>
            <Button url="#" text="See More" />
          </div>
          <div className={styles.categoryImgWrapper}>
            <Image
              className={styles.itemImg}
              src={item.image}
              fill={true}
              alt="item-img"
            />
          </div>
        </div>
      ))}
      {/* <div className={styles.categoryItem}>
        <div className={styles.categoryLeftSide}>
          <h1 className={styles.categoryItemTitle}>Title</h1>
          <p className={styles.catItemDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            voluptates! Consectetur in nisi esse odit voluptatem rem recusandae
            quis doloremque aliquam magnam molestiae, ea repellat vitae placeat
            alias numquam! Eum! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Expedita minus, autem placeat explicabo dicta
            accusantium ullam doloribus et id dolores assumenda numquam rerum
            obcaecati voluptatibus ratione ex in quidem illo?
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.categoryImgWrapper}>
          <Image
            className={styles.itemImg}
            src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill={true}
            alt="item-img"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Category;
