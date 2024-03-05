import React, { useState } from "react";
import { ONanswerKeyIcon, OffAnswerKeyIcon } from "../assets";
const FAQtemplate = () => {
    let [toggleFAQ, setToggleFAQ] = useState(false);
    // let answerElement = document.getElementsByClassName(
    //     "questionAnswerTemplate"
    // );

    // console.log(answerElement[0].offsetHeight);

    const toggleHandler = () => {
        setToggleFAQ((prev) => !prev);
    };

    return (
        <>
            <div
                className={`Template flex gap-[107px] border-solid rounded-[12px] p-5 shadow-md shadow-[#EFEFEF] border-[#EFEFEF] transition-all duration-500
                ${toggleFAQ ? "h-[200px]" : "h-[75px]"}`}
                onClick={toggleHandler}
            >
                <div className="templateDiv flex flex-col w-full overflow-y-hidden ">
                    <div className="questionTemplate  flex  font-medium text-[20px] ">
                        <p className="ml-3">
                            1.Difference between second hand mobile &
                            refurbished mobile?
                        </p>
                        <div className="AnswerKey w-6 h-6 flex justify-center items-center ml-auto mr-4 cursor-pointer">
                            <img
                                src={
                                    toggleFAQ
                                        ? ONanswerKeyIcon
                                        : OffAnswerKeyIcon
                                }
                                alt=""
                            />
                        </div>
                    </div>
                    <p
                        className={`questionAnswerTemplate ml-[30px] mt-[14px] max-w-[973px]`}
                    >
                        Lorem ipsum is a placeholder text commonly used to
                        demonstrate the visual form of a document or a typeface
                        without relying on meaningful content. Lorem ipsum is a
                        placeholder text commonly used to demonstrate the visual
                        form of a document or a typeface without relying on
                        meaningful content Lorem ipsum is a placeholder text
                        commonly used to demonstrate the visual form of a
                        document or a typeface without relying on meaningful
                        content.
                    </p>
                </div>
            </div>
        </>
    );
};

export default FAQtemplate;
