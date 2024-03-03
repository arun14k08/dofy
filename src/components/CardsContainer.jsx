// import React from 'react'
import Card from "./Card";

const CardsContainer = () => {
    return (
        <div className="w-[640px] flex flex-col gap-[24px] mt-[40px] mb-[22px]">
            <h2 className="font-semibold text-[24px]">Add-ons</h2>
            <div className="w-full flex flex-wrap gap-[24px] justify-center">
                <Card
                    title="Apple Earbuds Pro Refurbished"
                    priceDiscounted={34999}
                    priceOrginal={59999}
                    discount={40}
                />
                <Card
                    title="Apple Earbuds Pro Refurbished"
                    priceDiscounted={34999}
                    priceOrginal={59999}
                    discount={40}
                />
                <Card
                    title="Apple Earbuds Pro Refurbished"
                    priceDiscounted={34999}
                    priceOrginal={59999}
                    discount={40}
                />
                <Card
                    title="Apple Earbuds Pro Refurbished"
                    priceDiscounted={34999}
                    priceOrginal={59999}
                    discount={40}
                />
            </div>
        </div>
    );
};

export default CardsContainer;
