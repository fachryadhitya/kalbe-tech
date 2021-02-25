import styles from "./Login.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    Cookies.set("email", email);
    router.push("/Home");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#DBE6D6", padding: "2rem" }}>
      <div className={styles.wrapper}>
        <form onSubmit={submitHandler} action="" className={styles.form}>
          <h1 className={styles.title}>Sign In</h1>
          <div className={styles.formWrapper}>
            <label className={styles.formTitle} htmlFor="email">
              Email
            </label>
            <input
              placeholder="email"
              type="email"
              className={styles.inputHeight}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.formWrapper}>
            <label className={styles.formTitle} htmlFor="email">
              Password
            </label>
            <input
              placeholder="password"
              type="password"
              className={styles.inputHeight}
              required
            />
          </div>
          <button className={styles.button}>Login</button>
          <p className={styles.textRegister}>
            Don't have an account? Register{" "}
            <Link href="/Register" passHref>
              <a
                href="/Register"
                style={{ color: "#00BFFF", textDecoration: "underline" }}
              >
                Here
              </a>
            </Link>
            !
          </p>
        </form>
      </div>
    </div>
  );
}
