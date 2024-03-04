import CardsContainer from "./components/CardsContainer";
import Footer from "./components/Footer";
import { Card } from "./components/index";

const App = () => {
    return (
        <>
            <div className="w-full flex justify-center items-center">
                <CardsContainer />
            </div>
            <Footer />
        </>
    );
};

export default App;
