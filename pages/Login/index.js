import Head from "next/head";
import Login from "../../components/Login/Login";
import Navbar from "../../components/Navbar/Navbar";

export default function Loginn() {
  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Login />
    </div>
  );
}
