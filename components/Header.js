import React from "react";
import Link from "next/link";

const Header = () => (
  <header className="header">
    <Link href="/">
      <a className="header__main">PQML</a>
    </Link>
    <Link href="/members">
      <a className="header__members">members</a>
    </Link>
    <Link href="/news">
      <a className="header__news">news</a>
    </Link>
    <Link href="/projects">
      <a className="header__projects">projects</a>
    </Link>
    <Link href="/tutorials">
      <a className="header__tutorials">tutorials</a>
    </Link>
  </header>
);

export default Header;
