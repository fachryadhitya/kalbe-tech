import Head from "next/head";
import ListProduct from "../../components/Home/Home";
import Navbar from "../../components/Navbar/Navbar";
import { getAllProducts } from "../../services/api";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <ListProduct />
    </div>
  );
}
