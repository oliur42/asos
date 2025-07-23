import Image from "next/image";
import Header from "./components/Header";
import Men from "./components/Men";
import Women from "./components/Women";

export default function Home() {
  return (
    <div>
      <Header/>
      <Men/>
      <Women/>
   </div>
  );
}
