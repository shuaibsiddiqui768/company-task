import "./style.css";
import Navbar from "./components/Navbar";
import HirePage from "./components/HirePage";
import WhyHire from "./components/Whyhire";
import Technology from "./components/Technology";
import Testimony from "./components/Testimony";
import TrustSection from "./components/TrustSection";
import Process from "./components/Process";
import Steps from "./components/Steps";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
 return (
    <>
      <Navbar />
      <HirePage />
      <WhyHire />
      <Technology />
      <Testimony />
      <TrustSection />
      <Process />
      <Steps />
      <About />
      <Footer />
    </>
  );
}

export default App;
