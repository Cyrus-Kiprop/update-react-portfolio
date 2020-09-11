import React from "react";
import Navbar from "../navbar/navbar";
import Header from "../header/Header";
import Portfolio from "../Portfolio/Portfolio";

import "./Homepage.css";
import AboutMe from "./AboutMe";
import Footer from "../Footer/Footer";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Header />
      <main>
        <Portfolio />
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}
