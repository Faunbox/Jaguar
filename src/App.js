import { Suspense, lazy } from "react";
import Footer from "./components/Footer/Footer";
import Navigarion from "./components/Navbar/Navigation";
import HeroSecrion from "./pages/Hero/Hero";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Helmet } from "react-helmet-async";
import { firebaseConfig } from "./lib/firebase";

const Contact = lazy(() => import("./pages/Contact/Contact"));
const Gallery = lazy(() => import("./pages/Gallery/Gallery"));
const Offert = lazy(() => import("./pages/Offert/Offert"));

function App() {
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Wynajem samochodu na ślub</title>
        <link rel="cannonical" href="https://www.jaguarnaslub.pl/" />
        <meta
          name="description"
          content="Klasyczny Jaguar jako samochód do ślubu? Wypożyczenie takiego samochodu ubrawni waszą podróż i nada jej niesamowitego wyrazu. Samochód na ślub."
        />
        <meta
          name="keywords"
          content="samochód na ślub żywiec, ślub żywiec, wypozyczenie samochodu zywiec, samochód żywiec, samochód do ślubu żywiec, slub zywiec, jaguar XJ6, klasyk, klasyk na ślub"
        />
        <meta name="author" content="Filip Sojecki" />
      </Helmet>
      <Navigarion />
      <HeroSecrion />
      <Suspense fallback={<div>Ładowanie...</div>}>
        <Offert />
        <Gallery />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
