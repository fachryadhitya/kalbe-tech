import styles from "./Login.module.css";
import { useRouter } from "next/router";
export default function Register() {
  const router = useRouter();

  const submitHandler = async (event) => {
    event.preventDefault();
    router.push("/Login");
  };

  const form = [
    {
      name: "Name",
      type: "text",
    },
    {
      name: "Email",
      type: "email",
    },
    {
      name: "Phone",
      type: "number",
    },
    {
      name: "Password",
      type: "password",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#DBE6D6", padding: "2rem" }}>
      <div className={styles.wrapper}>
        <form onSubmit={submitHandler} action="" className={styles.form}>
          <h1 className={styles.title}>Register</h1>
          {form.map((i) => (
            <div className={styles.formWrapper}>
              <label className={styles.formTitle} htmlFor={i.name}>
                {i.name}
              </label>
              <input
                placeholder={i.name}
                type={i.type}
                className={styles.inputHeight}
                required
              />
            </div>
          ))}
          <button className={styles.button}>Register</button>
        </form>
      </div>
    </div>
  );
}
