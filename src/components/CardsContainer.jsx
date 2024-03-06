// import React from 'react'
import PropTypes from "prop-types";
import Card from "./Card";

const CardsContainer = (props) => {
    return (
        <div
            className={` ${
                props.fullWidth ? "w-max" : "w-[640px]"
            } flex flex-col gap-[24px] mt-[40px] mb-[22px]`}
        >
            <h2 className="font-semibold text-[24px]">{props.title}</h2>
            <div className="w-full flex flex-wrap gap-[24px] justify-center">
                <Card
                    title="Apple Earbuds Pro Refurbished"
                    priceDiscounted={34999}
                    priceOrginal={59999}
                    discount={40}
                    needTag={true}
                />
                <Card
                    title="Apple Earbuds Pro Refurbished"
                    priceDiscounted={34999}
                    priceOrginal={59999}
                    discount={40}
                    needTag={true}
                />
                <Card
                    title="Apple Earbuds Pro Refurbished"
                    priceDiscounted={34999}
                    priceOrginal={59999}
                    discount={40}
                    needTag={true}
                />
                <Card
                    title="Apple Earbuds Pro Refurbished"
                    priceDiscounted={34999}
                    priceOrginal={59999}
                    discount={40}
                    needTag={true}
                />
            </div>
        </div>
    );
};

CardsContainer.propTypes = {
    fullWidth: PropTypes.bool,
    title: PropTypes.string,
};

CardsContainer.defaultProps = {
    fullWidth: false,
    title: "TITLE",
};

export default CardsContainer;
