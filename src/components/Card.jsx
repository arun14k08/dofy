import PropTypes from "prop-types";
import { appleBuds } from "../assets";
import CheckBox from "./CheckBox";
import Discount from "./Discount";

const Card = (props) => {
    if (!props.discount && !props.priceOrginal) {
        console.warn("Discount and Original price not found");
    } else if (!props.discount) {
        console.warn("Discount not found");
    } else if(props.priceOrginal){
        console.warn("Original price not found");
    }

    return (
        <div className="flex flex-col justify-between w-[305px] h-[385px] border-2 border-[#EFEFEF] rounded-2xl relative overflow-hidden">
            <div className="w-full flex justify-center items-center bg-[#F5F5F5] h-[238px]">
                <CheckBox />
                <img src={appleBuds} alt="product" />
            </div>
            <div className="flex flex-col w-[250px] absolute left-4 top-[254px] gap-[10px]">
                <h3 className="font-semibold text-[20px] leading-[30px]">
                    {props.title}
                </h3>
                <div className="flex justify-between w-[226px]">
                    <p className="text-[20px] leadin-[18px] font-semibold">
                        ₹{props.priceDiscounted}
                    </p>

                    {props.discount && (
                        <>
                            <p className="my-auto font-normal text-[16px] leading-[18px] text-[#22222266]">
                                {props.priceOrginal && (
                                    <s>₹{props.priceOrginal}</s>
                                )}
                            </p>
                            <Discount discount={props.discount} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    priceOrginal: PropTypes.number,
    priceDiscounted: PropTypes.number,
    discount: PropTypes.number,
};
Card.defaultProps = {
    id: "id",
    title: "TITLE",
    priceDiscounted: 90,
};

export default Card;
