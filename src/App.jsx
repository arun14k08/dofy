import { CardsContainer, InBoxContents, Footer } from "./components";
const App = () => {
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center">
                <CardsContainer />
                <InBoxContents />
            </div>
            <Footer />
        </>
    );
};

export default App;
