import React from "react";
import web from "../images/hero-img.png";
import { NavLink } from "react-router-dom";
import Commom from "../Components/Common";

const About = () => {
  return (
    <>
      <Commom
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;