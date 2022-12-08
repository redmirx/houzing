import React from "react";
import { Container } from "./style";
import CarouselSection from "./../Carousel";
import Category from "./../Category";
import Recommended from "./../Recommended";
import WhyChooseUs from "./../Why";
import Banner from "./../Banner/index";
import Testimonials from "../Testimonials";
import Footer from "./../Footer";
import RecentRents from "./../RecentRents";

const Home = () => {
  return (
    <Container>
      <CarouselSection />
      <Recommended />
      <WhyChooseUs />
      <Category />
      <Banner />
      <RecentRents />
      <Testimonials />
      <Footer />
    </Container>
  );
};

export default Home;
