import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import '../styles/style.css'
 
const Term = () => {
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
    <th>Terms & Conditions</th>
  </tr>
  <tr>
    <td>(i) Please provide actual information while creating your “User ID”.</td>
    </tr>
<tr>
<td>
(ii) You are solely responsible for your user ID and the activity that occurs while signed in.
</td>
</tr>
<tr>
  <td>
  (iii) After registration you will obtain a user ID. Access to this site is not authorized for any other person using your user ID.
  </td>
</tr>
<tr>
  <td>
  (iv) Please notify us immediately if you become aware that your user id is being used without authorization.
  </td>
</tr>

<tr>
<td>
(v) No cash value for any voucher.
</td>
</tr>
<tr>
  <td>
  (vi) You have changed your mind about the purchase after the order has been placed.
  </td>
</tr>
<tr>
  <td>
  (vii) Each deal has a specific term associated with the deal, which will be presented to you at the time you commit to purchase the particular deal.
  </td>
</tr>
<tr>
  <td>
  (viii)  No cash back will be issued for partial redemption of the paid portion of a Voucher, except as required by law.
  </td>
</tr>
<tr>
  <td>
  (ix) No cash back will be issued for partial redemption of the paid portion of a Voucher, except as required by law.
  </td>
</tr>
<tr>
  <td>
  (x) 'Alien Lifestyle'  holds the right to alter any terms and conditions at any given condition.
  </td>
</tr>
</table>


    </div>
  );
};

export default Term;
