import React from "react";
import { ONanswerKeyIcon } from "../assets";
const FAQtemplate = () => {
  return (
    <>
      <div className="Template h-[194px] flex gap-[107px] border-solid rounded-[12px]  shadow-md shadow-[#EFEFEF] border-[#EFEFEF]">
        <div className="templateDiv flex flex-col   ">
          <div className="questionTemplate  flex  font-medium text-[20px] ">
            <p className="ml-3">
              1.Difference between second hand mobile & refurbished mobile?
            </p>
            <div className="AnswerKey w-6 h-6 flex justify-center items-center ml-auto mr-4">
              <img src={ONanswerKeyIcon} alt="" />
            </div>
          </div>
          <div className="questionAnswerTemplate ml-[30px] mt-[14px]">
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on
            meaningful content. Lorem ipsum is a placeholder text commonly used
            to demonstrate the visual form of a document or a typeface without
            relying on meaningful content
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQtemplate;
