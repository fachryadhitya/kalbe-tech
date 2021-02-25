import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Cookies from "js-cookie";

export default function Navbar() {
  const router = useRouter();
  const current = router.pathname.split("/").slice(1).join("");

  let dataNavbar;

  // useEffect(() => {
  //   if (localStorage.getItem("email")) {
  //     dataNavbar = ["Home", "Logout"];
  //   } else {
  //     dataNavbar = ["Home", "Login"];
  //   }
  // }, []);

  Cookies.get("email")
    ? (dataNavbar = ["Home", "Logout"])
    : (dataNavbar = ["Home", "Login"]);

  return (
    <div
      style={{
        background: "#DBE6D6",
      }}
    >
      <header className={`${styles.header}`}>
        {dataNavbar.map((i) => (
          <Link
            key={i}
            href={{
              pathname: "/" + i,
            }}
          >
            <h1 key={i} className={`nunito ${styles.item}`}>
              {i}
            </h1>
          </Link>
        ))}
      </header>
    </div>
  );
}
