import { Card } from "./components/index";

const App = () => {
    return (
        <>
            <div className="w-full h-[100vh] flex justify-center items-center">
                <Card
                    title="Apple Earbuds Pro Refurbished"
                    priceDiscounted={34999}
                    // priceOrginal={59999}
                    // discount={40}
                />
            </div>
        </>
    );
};

export default App;
