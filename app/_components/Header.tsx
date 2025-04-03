"use client"
import { Facebook, Instagram, Menu, Twitter, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const socials = [
  {
    logo: <Facebook />,
    link: "https://www.facebook.com/"
  },
  {
    logo: <Instagram />,
    link: "https://www.instagram.com/"
  },
  {
    logo: <Twitter />,
    link: "https://x.com/"
  }
]

const links = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Events",
    href: "/events"
  },
  {
    name: "About",
    href: "/about"
  },
  {
    name: "Contact",
    href: "/contact"
  }
]

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <header className="py-5 px-10 flex items-center justify-between w-full">
      <div className="flex items-center -z-20">
        {
          socials.map((social) => {
            return (
              <Link key={social.link} href={social.link} className="mx-2 size-10 text-gray-400 hover:text-gray-600">{social.logo}</Link>
            )
          })
        }
      </div>
      <div className="-z-20">
        <Link href="/">
          <Image src={"/marocmattbach_logo.png"} alt="marocmattbach_logo" width={300} height={300} className="size-40" priority={true} />
        </Link>
      </div>
      <div>
        <button onClick={() => setOpenMenu(!openMenu)} className="z-60 p-5 bg-gray-50 w-fit h-fit">
        <Menu size={48} className="text-gray-400 hover:text-gray-600" />
        </button>
      </div>
      <div className={`absolute top-0 left-0 z-50 h-screen w-full bg-[#0D0D0D] transition-all duration-500 ${openMenu ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>

      <div className="absolute top-15 right-10">
        <button onClick={() => setOpenMenu(!openMenu)} className="z-60 p-5 bg-gray-50 w-fit h-fit">
        <X size={48} className="text-gray-400 hover:text-gray-600" />
        </button>
      </div>
        <Image src={"/marocmattbach_logo.png"} alt="marocmattbach_logo" width={300} height={300} className="size-[30rem] absolute -top-28 -left-22 -rotate-12 opacity-10" priority={true} />
        <ul className="z-60 flex flex-col items-center justify-center h-screen">
          {links.map((link, index) => (
            <li key={index} className="group py-5 text-4xl text-white relative">
              <Link href={link.href} className="">{link.name}</Link>
              <div className="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500 absolute left-0 bottom-0"></div>
            </li>
          ))}
        </ul>

      </div>
    </header>
  )
};

export default Header
