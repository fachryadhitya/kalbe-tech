import Head from "next/head";
import Register from "../../components/Login/Register";
import Navbar from "../../components/Navbar/Navbar";

export default function Loginn() {
  return (
    <div>
      <Head>
        <title>Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Register />
    </div>
  );
}
