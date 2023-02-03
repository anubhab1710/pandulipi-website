import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Team from "./components/Team/Team";

function App() {
  return (
    <div className="font-oranienbaum">
      <Navbar />
      <Team />
      <About />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
