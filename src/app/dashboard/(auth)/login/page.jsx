"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.scss";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{success ? success : "Welcome Back"}</h1>
      <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>
      <form className={styles.register} onSubmit={(e) => handleSubmit(e)}>
        <input
          type="email"
          placeholder="email"
          className={styles.registerInput}
          required
        />
        <input
          type="password"
          placeholder="password"
          className={styles.registerInput}
          required
        />
        <button className={styles.registerBtn}>Login</button>
      </form>
      <button onClick={() => signIn("google")} className={styles.registerBtn}>
        Login with google
      </button>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/register">
        Create new account
      </Link>
    </div>
  );
};

export default Login;
