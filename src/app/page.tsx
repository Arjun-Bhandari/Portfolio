import Image from "next/image";
import {  Hero, Navbar,Exprience,Projects } from "@/src/components/index";


export default function Home() {
  return (
<>
      <Navbar />
      <Hero/>
      <Exprience/>
<Projects/>
     
   </>
  );
}
