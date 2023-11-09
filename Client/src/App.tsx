import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar.tsx";
import Navigation from "./components/Navbar/Navigation.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Home from "./pages/Home/Home.tsx";
import About from "./pages/About/About.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import FAQ from "./pages/FAQ/FAQ.tsx";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<About />}></Route>
          <Route path="/contactus" element={<Contact />}></Route>
          <Route path="/faq" element={<FAQ />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
