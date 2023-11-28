import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import '../styles/style.css'
 
const AboutPage = () => {
  return (
    <div>
      <Header activeHeading={5} />
      <Faq />
      <Footer />
    </div>
  );
};

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className="about">
        <p>
        Alien Lifestyle' is  a promising Lifestyle brand  in Bangladesh with exclusive footwear,<br></br> clothing, socs,wallet,belt,ladies bag,electronic devices  etc. They start their business<br></br> in 15 june 2019 in Dhaka Division.Now their business expand allover Bangladesh.<br></br>Stay tune with alien lifestyle if you want to 100% Genuine products.
        </p>
    </div>
  );
};

export default AboutPage;
