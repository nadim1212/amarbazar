import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import '../styles/style.css'
 
const Refund = () => {
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
    <div className="term">
 


 <table id="customers">
  <tr>
    <th>Exchange & Refund policy</th>
  </tr>
  <tr>
    <td>(i) If your product is defective/damaged or incorrect/incomplete at the time of delivery, please contact us within the applicable return window of 24 hours. Your product may be eligible for a refund or replacement depending on the product category and condition.</td>
    </tr>
<tr>
<td>
(ii) Please note that products are not eligible for a return if the customer has a change of mind.
</td>
</tr>
<tr>
  <td>
  (iii) You will always find the relevant terms and conditions on the product page (Return Policy tab).
  </td>
</tr>
<tr>
  <td>
  (iv)Delivered Product is damaged (physically destroyed or broken) / defective.
  </td>
</tr>

<tr>
<td>
(v) The size of a product does not match with the one ordered.
</td>
</tr>
<tr>
  <td>
  (vi) You have changed your mind about the purchase after the order has been placed.
  </td>
</tr>
<tr>
  <td>
  (vii) The product must be unused, unworn, and unwashed.
  </td>
</tr>
<tr>
  <td>
  (viii) The product must include the original tags, user manual, warranty cards, freebies, and accessories.
  </td>
</tr>
<tr>
  <td>
  (ix) The product must be returned in the original and undamaged manufacturer packaging/box.
  </td>
</tr>
<tr>
  <td>
  (x) If your product is eligible for a refund, you can choose to refund via exchange courier. Once we have received your product (2-3 working days after the customer has initiated return delivery) and it has undergone quality control (1-2 working days), the expected refund processing window is 7 working days.
  </td>
</tr>
<tr>
  <td>
  (Xi) Sometimes due to unwanted issues and transportation delays, the refund process may take a bit longer than the expected window.
  </td>
</tr>
</table>


  
    </div>
  );
};

export default Refund;
