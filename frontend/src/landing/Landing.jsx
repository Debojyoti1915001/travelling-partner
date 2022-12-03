import React from "react";
import Navbar from "../components/landingpage/Navbar/index";
import Footer from "../components/landingpage/Footer/Footer";
import Intro from "../components/landingpage/Introduction/Intro";
import Sliding from "../components/landingpage/Sliding/Sliding";
import Form from "../components/landingpage/Form/Form";
import Who from "../components/landingpage/WhoWeAre/Who";
import Different from "../components/landingpage/MakeUsDifferent/MakeUsDifferent";
import OurMission from "../components/landingpage/OurMission/OurMission";
import HowItWorks from "../components/landingpage/HowItWorks/HowItWorks";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <Different />
      <OurMission />
      <HowItWorks />
      <Who />
      <Form />
      <Footer />
    </>
  );
};

export default Landing;
