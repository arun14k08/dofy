import CardsContainer from "./components/CardsContainer";
import Footer from "./components/Footer";
import { FAQ, InBoxContents } from "./components/index";

const App = () => {
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center">
                <CardsContainer title={"Add-ons"} />
                <InBoxContents />
                <FAQ />
                <CardsContainer fullWidth={true} title={"Similar deals"} />
            </div>
            <Footer />
        </>
    );
};

export default App;
