import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link className="navbar__link relative" href="#">HOME</Link>
          <Link className="navbar__link relative" href="#">CATEGORIES</Link>
          <Link className="navbar__link relative" href="#">MEN&apos;S</Link>
          <Link className="navbar__link relative" href="#">WOMEN&apos;S</Link>
          <Link className="navbar__link relative" href="#">JEWELRY</Link>
          <Link className="navbar__link relative" href="#">PERFUME</Link>
          <Link className="navbar__link relative" href="#">BLOGS</Link>
          <Link className="navbar__link relative" href="#">HOT OFFERS</Link>
        </div>
      </div>
    </div>
  );
}

//navbar__link  ye kia h? kya nazar a rha h  kaha define kia h isko knsi class h bhai ye?