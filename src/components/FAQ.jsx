import React from "react";

import { FAQtemplate } from "./index";
const FAQ = () => {
    return (
        <div className=" flex flex-col justify-center mx-[120px]">
            <h1 className=" leading-[42px] text-[32px]">FAQ</h1>
            <div className="FAQcontent mt-[30px] flex flex-col gap-[16px]">
                <FAQtemplate />
                <FAQtemplate />
                <FAQtemplate />
            </div>
        </div>
    );
};

export default FAQ;
