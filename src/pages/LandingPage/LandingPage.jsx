import React from "react";
import Banner from "../../components/Banner/Banner";
import AboutUs from "../../components/AboutUs";
import Features from "../../components/Features";
import Pricing from "../../components/Pricing";
import Feedbacks from "../../components/Dashboard/Feedbacks";
import Inaction from "../../components/Dashboard/Inaction";
import Footer from "../../components/Footer";

const LandingPage = () => {
  return (
    <main>
      <section id="home">
        <Banner />
      </section>
      <section id="about-us">
        <AboutUs />
      </section>
      <section id="features">
        <Features />
      </section>
      <section>
        <Pricing />
      </section>
      <section>
        <Feedbacks />
      </section>
      <section>
        <Inaction />
      </section>
      <Footer />
    </main>
  );
};

export default LandingPage;
