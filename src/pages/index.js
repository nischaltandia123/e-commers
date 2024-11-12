import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import Slider from "./sliders";
import Content from "./Content";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const arr1 = [
    {
      url: "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/MonoonPlants.jpg?v=1718193388",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/MonsoonFertilisers.jpg?v=1718193626",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/monsoonPlanters.jpg?v=1718193530",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Flash-Sale_Desktop_19497413-fa0f-4070-b3e0-73b31835e9c2.jpg?v=1720809825",
    }

  ];
  return (
    <div>
      <Head>
        <title>Plant bazzaar</title>
        <meta name="description" content="Codeswear.com wear the code" />
        <link rel="icon" href="/logo3.png" />
        <style>{`body { font-family: ${inter}; }`}</style>
      </Head>
      <Navbar />
      <Slider slides={arr1} />
      <Content/>
      <Footer/>
    </div>
  );
}
