import React from "react";
import {  facebook,
  XsocialIcons,
  WhatsappIcons,
  YoutubeIcon,
  LinkedInIcon,
  InstaIcons,
  PlaystoreIcon,
  AppStoreIcon,} from "../assets"
const Footer = () => {
  return (
    <div className="Footer bg-[#EAEAEA] w-full h-[405px] px-[120px] py-[39px] flex justify-between mt-[200px]">
      <div id="AboutContent">
        <h1 className=" font-bold text-[24px] leading-[28.8px] tracking-[4px]">
          DOFY
        </h1>
        <p className=" font-[400]  text-[14px] leading-[22px] mt-[6px]">
          We promise our users the best price for their <br />
          electronic devices, ensuring transparent and secured <br />
          transactions at their doorstep
        </p>
        <div className="Abouticon flex gap-[11px] mt-[38px] w-[190.53px] h-[22.59px]">
          <img src={facebook} alt="" />
          <img src={XsocialIcons} alt="" />
          <img src={InstaIcons} alt="" />
          <img src={LinkedInIcon} alt="" />
          <img src={YoutubeIcon} alt="" />
          <img src={WhatsappIcons} alt="" />
        </div>
        <h3 className=" text-[16px] font-medium  leading-[22px] mt-[38.41px]	">
          Download our exclusive app
        </h3>
        <div className="StoreIcon flex gap-[6.97px] mt-[15.2px] ">
          <img src={AppStoreIcon} alt="" />
          <img src={PlaystoreIcon} alt="" />
        </div>
        <h5 className=" mt-[45.47px] font-[400] leading-[22px] text-[#000000] opacity-[60%] text-[14px]">
          Copyrights © 2024  All rights reserved
        </h5>
      </div>
      <div id="AboutContent" className=" flex gap-[60px] ">
        <div id="QuickLinks" className=" font-[600] flex flex-col gap-[12px]">
          <h1 className=" QuickLinksMenu   font-[600] text-[20px] text-[#EA002A] ">
            Quick Links
          </h1>
          <div className="font-normal leading-[30px] text-[16px]">
            <h1>About Us</h1>
            <h5>FAQ</h5>
            <h5>Contact Us</h5>
            <h5>Find our stores</h5>
            <h5>Terms & Conditions</h5>
            <h5>Privacy Policy</h5>
          </div>
        </div>
        <div id="PopularCategories" className="  flex gap-[12px] flex-col">
          <h1 className=" font-[600] text-[20px] text-[#EA002A]">
            PopularCategories
          </h1>
          <div className="font-normal leading-[30px] text-[16px]">
            <h5>Buy Mobile Phone</h5>
            <h5>Buy Laptops</h5>
            <h5>Sell Tablets</h5>
            <h5>Buy Smartwatch</h5>
            <h5>Buy Gaming Console</h5>
            <h5>Buy Earpods</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
