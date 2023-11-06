"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const data = await res.json();
  //     setData(data);
  //     setIsLoading(false);
  //   };

  //   getData();
  // }, []);

  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading....</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  //check your session status
  console.log("session", session);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const removePost = async (postId) => {
    try {
      await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log("post not added", err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "loading"
            : data?.map((post) => (
                <div key={post.id} className={styles.dashPost}>
                  <div className={styles.imgWrapper}>
                    <Image
                      className={styles.dashImg}
                      src={post.img}
                      alt=""
                      width={200}
                      height={100}
                    />
                  </div>
                  <h2 className={styles.postDashBoardTitle}>{post.title}</h2>
                  <span
                    onClick={() => removePost(post._id)}
                    className={styles.remove}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form
          className={styles.dashboardNewPost}
          onSubmit={(e) => handleSubmit(e)}
        >
          <h1>Add new post</h1>
          <input type="text" placeholder="title" className={styles.dashinput} />
          <input type="text" placeholder="desc" className={styles.dashinput} />
          <input type="text" placeholder="Image" className={styles.dashinput} />
          <textarea
            placeholder="Content"
            cols="30"
            rows="10"
            className={styles.dashTextArea}
          ></textarea>
          <button className={styles.dashAddBtn}>send</button>
        </form>
      </div>
    );
  }

  return <div>dashboard</div>;
};

export default Dashboard;
