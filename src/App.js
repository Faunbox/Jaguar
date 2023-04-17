import { Suspense, lazy } from "react";
import Footer from "./components/Footer/Footer";
import Navigarion from "./components/Navbar/Navigation";
import Gallery from "./pages/Gallery/Gallery";
import HeroSecrion from "./pages/Hero/Hero";
import Offert from "./pages/Offert/Offert";

const Contact = lazy(() => import("./pages/Contact/Contact"));

function App() {
  return (
    <>
      <Navigarion />
      <Suspense fallback={<div>Loading...</div>} />
      <HeroSecrion />
      <Offert />
      <Gallery />
      <Contact />
      <Suspense />
      <Footer />
    </>
  );
}

export default App;
