// import React from 'react'
// import CheckBox from "./CheckBox";
import { check } from "../assets";

import { useState } from "react";

const CheckBox = () => {
    let [isChecked, setIsChecked] = useState(false);

    const clickHandler = () => {
        setIsChecked((prev) => !prev);
    };

    return (
        <>
            <button onClick={clickHandler}>
                {isChecked ? (
                    <div className="w-8 h-8 border-[#EA002A99] border-[1px] rounded bg-white absolute top-4 left-64 flex justify-center items-center">
                        <img src={check} alt="check" />
                    </div>
                ) : (
                    <div className="w-8 h-8 border-[#DBD9D9] border-[1px] rounded bg-white absolute top-4 left-64"></div>
                )}
            </button>
        </>
    );
};

export default CheckBox;
