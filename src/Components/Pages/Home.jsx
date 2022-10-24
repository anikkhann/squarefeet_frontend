import React from "react";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Services from "../Services/Services";
import Application from "../Application/Application";
import Events from "../Events/Events";
import Blogs from "../Blogs/Blogs";
import Footer from "../Footer/Footer";
import Pricing from "../Pricing/Pricing";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
const Home = () => {
  return (
    //
    <section className="overflow-hidden" id="#home">
      <Header></Header>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Application></Application>
      <Pricing></Pricing>
      <VideoPlayer></VideoPlayer>
      <Events></Events>
      <Blogs></Blogs>
      <Footer></Footer>
    </section>
  );
};

export default Home;
