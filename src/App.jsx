import { Card } from "./components/index";

const App = () => {
    return (
        <>
            <div className="w-full h-[100vh] flex justify-center items-center">
                <Card
                    title="Apple Earbuds Pro Refurbished"
                    priceOrginal={59999}
                    priceDiscounted={34999}
                    discount={40}
                />
            </div>
        </>
    );
};

export default App;
