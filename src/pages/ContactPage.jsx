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
        <h2>
        ALIEN LIFESTYLE 
        </h2>
        <p>
        Head Office: Dewgaon,Rajasion,Savar,Dhaka, Bangladesh.<br></br>

Email: support@alienbd.com <br></br>

Customer care:+8801622200609
+8801748772666
        </p>
    </div>
  );
};

export default AboutPage;
