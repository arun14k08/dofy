const Discount = (props) => {
    return (
        <>
            <div className="my-auto px-[10px] py-[4px] border-2 border-[#EA002A] rounded bg-[#FFDEE4]">
                <p className="text-[12px] leading-[14.4px] font-semibold text-[#EA002A]">
                    {props.discount}% OFF
                </p>
            </div>
        </>
    );
};

Discount.propTypes = {
    discount: Number,
};
Discount.defaultProps = {
    discount: 0,
};

export default Discount;
