import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className=" w-full h-screen flex justify-center items-center  flex-col ">
      <div>
        <Image src={"/banner.svg"} width={600} height={600} alt="banner" />
      </div>
      <div >
        <h1  className=" text-6xl   md:text-7xl lg:text-9xl  font-extrabold  bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">Raven</h1>

<Link href={"/login"}>
<Button className=" mt-2">Sign up now </Button>
</Link>
      </div>

    </div>
  );
};

export default HeroSection;
