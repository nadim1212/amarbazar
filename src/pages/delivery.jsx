import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import '../styles/style.css'
 
const Delivery = () => {
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
    <th>DELIVERY POLICY</th>
  </tr>
  <tr>
    <td>(i) At 'Alien Lifestyle'  we are committed to deliver the Products in good condition, so we ship our Products  through renowned and reputed couriers.</td>
    </tr>
<tr>
<td>
(ii) We are committed to deliver our products within 7 (seven) working days after order is confirmed in terms of outside Dhaka.
</td>
</tr>
<tr>
  <td>
  (iii) We are committed to deliver our Products  within 4 (four) working days after order is confirmed in terms of inside Dhaka.
  </td>
</tr>
<tr>
  <td>
  (iv) We deliver each order only to a single destination as specified in the purchase order
  </td>
</tr>

<tr>
<td>
(v) Some exceptional cases delivery may be multiple in respect of multiple items of single order/invoice without imposing extra delivery charge.
</td>
</tr>
<tr>
  <td>
  (vi) Delivery cost inside Dhaka is of Tk. 80/- and outside Dhaka is of Tk. 120/- will be borne by the customer
  </td>
</tr>
</table>
    </div>
  );
};

export default Delivery;
