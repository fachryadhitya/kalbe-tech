import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar";
import FormData from "../../components/UpdateProduct/Form";
import { getAllProducts, getDetailProduct } from "../../services/api";

export default function Home(props) {
  const { Product } = props;
  return (
    <div>
      <Head>
        <title>Update Product</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <FormData data={Product} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const Product = await getDetailProduct(context.params.id);

  return {
    props: {
      Product,
    },
  };
}
