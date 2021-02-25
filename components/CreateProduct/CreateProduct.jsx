/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { Col, Row } from "reactstrap";
import { createProducts, updateProducts } from "../../services/api";
import { TextInput } from "../hooks/useForm";
import styles from "../UpdateProduct/Form.module.css";
import { useState } from "react";
import axios from "axios";
import { route } from "next/dist/next-server/server/router";

const CreateProduct = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await createProducts(name, price, stock, image).then(() =>
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
          padding: "2rem",
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
                  placeholder="Product Name"
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
                  placeholder="Product Price"
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
                  placeholder="Product Stock"
                  onChange={(e) => setStock(e.target.value)}
                  type="number"
                  value={stock}
                  className={styles.inputHeight}
                />
              </div>

              <div>
                <label htmlFor="" className={styles.formTitle}>
                  Image Link
                </label>
                <input
                  placeholder="Product Stock"
                  onChange={(e) => setImage(e.target.value)}
                  type="text"
                  value={image}
                  className={styles.inputHeight}
                />
              </div>

              <button type="submit" className={styles.button}>
                Add Products
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
