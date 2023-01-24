import React from "react";
import Courses from "../../components/courses/Courses";
import Header from "../../components/header/Header";
import About from "../../components/about/About";
import Socials from "../../components/socials/Socials";
import Footer from "../../components/footer/Footer";

function Main() {
  return (
    <>
      <Header />
      <Courses />
      <About />
      <Socials />
      <Footer />
    </>
  );
}

export default Main;
