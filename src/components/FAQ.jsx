import React from "react";

import { FAQtemplate } from "./index";
const FAQ = () => {
  return (
    <div className=" flex flex-col">
      <h1 className=" leading-[42px] text-[32px]">FAQ</h1>
      <div className="FAQcontent w-[1200px] h-[638px] mt-[30px] flex flex-col gap-[16px]">
        <FAQtemplate />
      </div>
    </div>
  );
};

export default FAQ;
