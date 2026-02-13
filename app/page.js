'use client'

import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (

    <>
    <Navbar></Navbar>
    <Header></Header>
    <About></About>
    <Services> </Services>
    <Portfolio></Portfolio>
    </>
  );
}
