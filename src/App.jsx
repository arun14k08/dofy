import CardsContainer from "./components/CardsContainer";
import Footer from "./components/Footer";
import { Button, FAQ, InBoxContents } from "./components/index";

const App = () => {
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center">
                <CardsContainer title={"Add-ons"} />
                <InBoxContents />
                <FAQ />
                <div className="flex flex-col items-center">
                    <CardsContainer fullWidth={true} title={"Similar deals"} />
                    <Button />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default App;
