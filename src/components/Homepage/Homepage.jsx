import React from "react";
import Navbar from "../navbar/navbar";
import Header from "../header/Header";
import Portfolio from "../Portfolio/Portfolio";

import "./Homepage.css";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Header />
      <main>
        <Portfolio />
      </main>
    </div>
  );
}
