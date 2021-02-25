import { useRouter } from "next/router";
import { updateProducts } from "../../services/api";
import styles from "./Form.module.css";
import { useState } from "react";

const FormData = ({ data }) => {
  const router = useRouter();
  const idProduct = data.id;

  const [name, setName] = useState(data.name);
  const [price, setPrice] = useState(data.price);
  const [stock, setStock] = useState(data.stock);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateProducts(idProduct, name, price, stock).then(() =>
        router.push("/Home")
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        style={{
          background: "#DBE6D6",
          minHeight: "100vh",
          padding: "1rem",
        }}
      >
        <div className={styles.wrapper}>
          <h1 className="nunito" style={{ textAlign: "center" }}>
            Form Product
          </h1>

          <div className={styles.formWrapper}>
            <form action="" onSubmit={onSubmit}>
              <div>
                <label htmlFor="" className={styles.formTitle}>
                  Product Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  value={name}
                  className={styles.inputHeight}
                />
              </div>

              <div>
                <label htmlFor="" className={styles.formTitle}>
                  Product Price
                </label>
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  value={price}
                  className={styles.inputHeight}
                />
              </div>

              <div>
                <label htmlFor="" className={styles.formTitle}>
                  Product Quantity
                </label>
                <input
                  onChange={(e) => setStock(e.target.value)}
                  type="number"
                  value={stock}
                  className={styles.inputHeight}
                />
              </div>

              <button type="submit" className={styles.button}>
                Update Products
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormData;
