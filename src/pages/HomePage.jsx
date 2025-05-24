import React from "react";
import Hero from "../components/home/Hero";
import Collectibles from "../components/home/Collectibles";
import EcoFriendly from "../components/home/EcoFriendly";
import StandOut from "../components/home/StandOut";
import { Helmet } from "react-helmet-async";
import HowItWorks from "../components/home/HowItWorks";
import Testimonials from "../components/home/Testimonials";
import BlogSection from "../components/home/BlogSection";
import { FAQSection } from "../components/home/FAQSection";
import OurProcess from "../components/home/OurProcess";

const HomePage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Triple R Recycling Limited</title>
      </Helmet>
      <Hero />
      <EcoFriendly />
      <StandOut />
      <HowItWorks />
      <OurProcess />
      <Collectibles />
      <Testimonials />
      <BlogSection />
      <FAQSection />
    </div>
  );
};

export default HomePage;
