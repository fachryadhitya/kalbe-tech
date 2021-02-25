import Link from "next/link";
import { useEffect, useState } from "react";
import { deleteProducts, getAllProducts } from "../../services/api";
import styles from "./Home.module.css";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function ListProduct() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [criteria, setCriteria] = useState("");

  const ab = async () => {
    const a = await getAllProducts();
    setData(a);
  };

  const deleteProduct = async (id) => {
    await deleteProducts(id).then(() => ab());
  };

  const filterData = () => {
    const filter = data.filter((item) => item.name === criteria);
    setData(filter);
  };

  const showAll = () => {
    ab();
  };

  useEffect(() => {
    ab();
  }, []);

  const handleAddProduct = () => {
    router.push("/add-product");
  };

  return (
    <div style={{ background: "#DBE6D6", minHeight: "100vh", padding: "2rem" }}>
      <div className={styles.wrapper}>
        {Cookies.get("email") && (
          <button
            className={styles.addProductButton}
            onClick={handleAddProduct}
          >
            Add Product
          </button>
        )}

        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setCriteria(e.target.value)}
            className={styles.search}
          />
          <button className={styles.searchButton} onClick={filterData}>
            Search
          </button>
          <button className={styles.showAllButton} onClick={showAll}>
            Show All
          </button>
        </div>

        <div className={styles.productWrapper}>
          {data?.map((i) => (
            <div key={i.id} className={styles.productItem}>
              <img
                className={styles.productHeight}
                src={i.imageLink}
                alt="Thumbnail"
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h1 className={`nunito`}>{i.name}</h1>

                <p className={`overlock ${styles.qty}`}>Quantity: {i.stock}</p>
                <p className={`overlock ${styles.price}`}>Rp. {i.price}</p>

                {Cookies.get("email") && (
                  <div className={styles.linkWrapper}>
                    <Link
                      href={{
                        pathname: "/update-product/[...params]",
                        query: { params: [i.id] },
                      }}
                    >
                      <a className={`overlock ${styles.update}`}>
                        Update Product
                      </a>
                    </Link>

                    <button
                      className={styles.remove}
                      onClick={() => deleteProduct(i.id)}
                    >
                      Remove Product
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
