import CardsContainer from "./components/CardsContainer";
import Footer from "./components/Footer";
import { Card, FAQ, FAQtemplate, InBoxContents } from "./components/index";

const App = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <CardsContainer />
      </div>
      <InBoxContents />
      <FAQ />
      <Footer />
    </>
  );
};

export default App;
