import React from "react";
import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import Faqs from "../sections/Faqs";
import Plans from "../sections/Plans";
import ScrollToTop from "../components/ScrollToTop";
import Music from "../sections/Music";
import Sound from "../sections/Sound";
import Footer from "../sections/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Music />
      <Sound />
      <Plans />
      <Faqs />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
