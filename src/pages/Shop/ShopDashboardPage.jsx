import React from "react";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";
import DashboardHero from "../../components/Shop/DashboardHero";
import Sidebar from "../../components/Shop/sidebar/Sidebar";
import Navbar from "../../components/Shop/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/Shop/widget/Widget";
import Featured from "../../components/Shop/featured/Featured";
import Chart from "../../components/Shop/chart/Chart";
import Table from "../../components/Shop/table/Table";

const ShopDashboardPage = () => {
  return (
        <div>
          <DashboardHeader />
          <div className="flex items-start justify-between w-full">
            <div className="w-[80px] 800px:w-[330px]">
              <DashboardSideBar active={1} />
            </div>
            <DashboardHero />
          </div>

          
         
        </div>
      //   <div className="home">
      //   <Sidebar />
      //   <div className="homeContainer">
      //     <Navbar />
      //     <div className="widgets">
      //       <Widget type="user" />
      //       <Widget type="order" />
      //       <Widget type="earning" />
      //       <Widget type="balance" />
      //     </div>
      //     <div className="charts">
      //       <Featured />
      //       <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
      //     </div>
      //     <div className="listContainer">
      //       <div className="listTitle">Latest Transactions</div>
      //       <Table />
      //     </div>
      //   </div>
      // </div>

      
  );
};

export default ShopDashboardPage;
