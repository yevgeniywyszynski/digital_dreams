import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import { notFound } from "next/navigation";
import AvatarDefault from "../../../../public/user.png";

async function getDate(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);

  if (!res.ok) {
    //throw new Error("failed to fetch data");
    return notFound();
  }

  return res.json();
}

const Post = async ({ params }) => {
  const data = await getDate(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.blogItem}>
        <div className={styles.blogTop}>
          <div className={styles.blogTopContent}>
            <h1 className={styles.blogItemTitle}>{data.title}</h1>
            <p className={styles.blogItemDesc}>{data.desc}</p>
            <div className={styles.blogAuthorWrapper}>
              <Image
                className={styles.blogAuthorAvatar}
                width={45}
                height={45}
                src={data.authoravatar ? data.authoravatar : AvatarDefault}
                alt="author-avatar"
              />
              <p className={styles.authorFullName}>{data.username}</p>
            </div>
          </div>
          <div className={styles.blogImgWrapper}>
            <Image
              className={styles.blogImg}
              src={data.img}
              fill={true}
              alt="item-img"
            />
          </div>
        </div>
        <div className={styles.blogTextWrapper}>
          <p className={styles.blogText}>{data.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
