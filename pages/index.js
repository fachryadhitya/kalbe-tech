import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";
import Home from "./Home";

export default function Redirect() {
  return <Home />;
}
