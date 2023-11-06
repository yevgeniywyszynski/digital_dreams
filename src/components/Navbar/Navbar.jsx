"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.scss";
import DarkModeToggle from "../Dark-mode-toggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();

  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        Digital&Dreams
      </Link>
      <div className={styles.navLinkWrapper}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link className={styles.navLink} href={link.url} key={link.id}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button onClick={() => signOut()} className={styles.logoutBtn}>
            logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
