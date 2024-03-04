import CardsContainer from "./components/CardsContainer";
import Footer from "./components/Footer";
import { Card, FAQ } from "./components/index";

const App = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <CardsContainer />
      </div>
      <FAQ />
      <Footer />
    </>
  );
};

export default App;
