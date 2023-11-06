import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts");

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      {data.map((post) => (
        <Link
          key={post.key}
          href={`/blog/${post._id}`}
          className={styles.blogitem}
        >
          <div className={styles.blogItemImgcontainer}>
            <Image
              src={post.img}
              alt="blog-img"
              width={400}
              height={250}
              className={styles.blogImg}
            />
          </div>
          <div className={styles.blogTextWrapper}>
            <h1 className={styles.blogTitle}>{post.title}</h1>
            <p className={styles.blogDescription}>{post.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
