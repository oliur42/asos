import Image from "next/image";
import Header from "./components/Header";
import Men from "./components/Men";
import Women from "./components/Women";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Carosule from "./components/Carosule";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
      <Header/>
      <Men/>
      <Carosule/>
      <Footer/>
   </div>
  );
}
