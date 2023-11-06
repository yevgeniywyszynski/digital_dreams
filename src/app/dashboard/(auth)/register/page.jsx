"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [err, setErr] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      res.status == 201 &&
        router.push("/dashboard/login?success=Account has be created");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>
      <form className={styles.register} onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="username"
          className={styles.registerInput}
          required
        />
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
        <button className={styles.registerBtn}>Register</button>
      </form>
      {err && "Something went wrong"}
      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  );
};

export default Register;
