import React from "react";
import Navbar from "../components/landingpage/Navbar/index";
import Footer from "../components/landingpage/Footer/Footer";
import Intro from "../components/landingpage/Introduction/Intro";
import Form from "../components/landingpage/Form/Form";
import Different from "../components/landingpage/MakeUsDifferent/MakeUsDifferent";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <Different />
      <Form />
      <Footer />
    </>
  );
};

export default Landing;
