import Header from "./components/Header";
import Hero from "./components/Hero";
import KeySectorsStrip from "./components/KeySectorsStrip";
import BrandsGrid from "./components/BrandsGrid";
import WhyChooseUs from "./components/WhyChooseUs";
import ValuesSection from "./components/ValuesSection";
import IllustratedStepsForCandidatesAndClients from "./components/IllustratedStepsForCandidatesAndClients";
import CallToActionDual from "./components/CallToActionDual";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <KeySectorsStrip />
        <BrandsGrid />
        <WhyChooseUs />
        <ValuesSection />
        <IllustratedStepsForCandidatesAndClients />
        <CallToActionDual />
      </main>
      <Footer />
    </>
  );
}

export default App;
