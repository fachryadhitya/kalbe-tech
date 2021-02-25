import Head from "next/head";
import CreateProduct from "../../components/CreateProduct/CreateProduct";
import Navbar from "../../components/Navbar/Navbar";
import FormData from "../../components/UpdateProduct/Form";
import { getAllProducts, getDetailProduct } from "../../services/api";

export default function Home(props) {
  const { Product } = props;
  return (
    <div>
      <Head>
        <title>Create Product</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <CreateProduct />
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const Product = await getDetailProduct(context.params.id);

//   return {
//     props: {
//       Product,
//     },
//   };
// }
