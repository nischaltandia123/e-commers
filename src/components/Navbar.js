import Link from "next/link";
import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiWalletFill } from "react-icons/pi";
const Navbar = () => {
  return (
    <div className=" flex flex-row md:flex-row text-gray-600  justify-between md:items-center sm:items-center">
      
        <div className="md:hidden mr-6 my-14 px-6 flex text-2xl ">
        <RxHamburgerMenu />
        </div>
        <div className="flex  py-1 md:mx-2   ">
          <img src="/logo1.png" className=" aspect-auto h-24 size-36 " alt="Logo" />
        </div>
      
      <div className="hidden  md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 md:flex flex-col md:flex-row items-center text-base justify-center space-x-3 font-semibold ">
        <Link href="/tshirt">PLANTS</Link>
        <Link href="/">SEEDS</Link>
        <Link href="/">POTS & PLANTERS</Link>
        <Link href="/">PLANT CARE</Link>
        <Link href="/">GIFTING</Link>
        <Link href="/">BLOGS</Link>
        <Link href="/" className="text-green-600 ">OFFERS</Link>

      </div>
      <div className="flex flex-row space-x-2 mx-4 my-12  md:absolute right-0  md:space-x-4 md:mx-4">
        <div className="">
          <button className="text-3xl">
          <PiWalletFill />
          </button>
        </div>
        <div className="text-2xl">
          <button>
            <IoPerson />
          </button>
        </div>
        <div className="text-2xl">
          <button>
            <RiShoppingCartLine />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
