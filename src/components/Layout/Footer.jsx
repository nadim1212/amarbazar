import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";

const Footer = () => {
  return (
    <div className="">
     <footer class="relative bg-blueGray-200 pt-8 pb-6">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap text-left lg:text-left">
      <div class="w-full lg:w-6/12 px-4">
        <h4 class="text-3xl fonat-semibold text-blueGray text-bold">Let's keep in touch!</h4>
        <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
        Head Office:Dhaka,Bangladesh

        </h5>
        <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
        
        Email:support@nogodshop.com
        </h5>
        <div class="mt-6 lg:mb-0 mb-6">
          <button class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
          <a href=""><i class="fab fa-twitter"></i></a> </button><button class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
          <a href=""> <i class="fab fa-facebook-square"></i></a> </button><button class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
           <a href=""> <i class="fab fa-youtube"></i></a></button><button class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
           <a href=""> <i class="fab fa-instagram"></i> </a>
          </button>
        </div>
      </div>
      
      <div class="w-full lg:w-6/12 px-4">
        <div class="flex flex-wrap items-top mb-6">
          <div class="w-full lg:w-4/12 px-4 ml-auto">
            <span class="block uppercase text-blueGray-500 text-xl font-semibold mb-2 text-3xl">About</span>
            <ul class="list-unstyled">
            
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">About Us</a>
              </li>
            
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Contact Us</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">FAQ</a>
              </li>
             
            </ul>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <span class="block uppercase text-blueGray-500 text-xl font-semibold mb-2 ">My Support</span>
            <ul class="list-unstyled">
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">My Profile</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Terms &amp; Conditions</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Exchange &amp; Refund</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Delivery Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-6 border-blueGray-300"/>
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2023</span><a href="" class="text-blueGray-500 hover:text-gray-800" target="_blank"> Nogod Shop by</a>
          <a href="" class="text-blueGray-500 hover:text-blueGray-800"> ali it limited </a>.
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
};

export default Footer;
