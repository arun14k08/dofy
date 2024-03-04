// import React from 'react'
import { mobileBox, ellipse } from "../assets/index";
import { contents } from "../constants";
const InBoxContents = () => {
    return (
        <>
            <div className="flex overflow-hidden static-border w-[630px] justify-between">
                <div className="flex flex-col gap-3">
                    <div className="pl-4 pt-4">
                        <h3 className="text-[24px] font-semibold">
                            What you get inside the box
                        </h3>
                    </div>
                    <div className="flex flex-col gap-[12px] mb-5 pt-[10px] pl-[30px]">
                        {contents.map((content) => {
                            return (
                                <div key={content.id} className="flex gap-3">
                                    <div className="w-[34px] h-[34px] text-[#EA002A] border-2 border-[#EA002A] rounded-full flex justify-center items-center bg-[#ea002b26]">
                                        {content.id}
                                    </div>
                                    <p className="font-medium text-[16px] my-auto">
                                        {content.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="flex relative">
                    <img
                        src={ellipse}
                        alt="ellipse"
                        className="absolute left-[100%] -translate-x-[84px]"
                    />
                    <img
                        src={mobileBox}
                        alt="mobile-box"
                        className="relative bottom-0 right-0  origin-bottom-right w-[250px]"
                    />
                </div>
            </div>
        </>
    );
};

export default InBoxContents;
