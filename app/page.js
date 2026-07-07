
import { motion } from "motion/react";
import Homepages from "./pages/Homepage/Homepages";
import Navbar from "./components/navbar";
import Categories from "./components/Categories/Categories";
import Footer from "./components/common/Footer/Footer";

export default function Home() {
 
  return (
    <>
      <Navbar />
      <Homepages />
      <Footer />
    </>
  );
}
