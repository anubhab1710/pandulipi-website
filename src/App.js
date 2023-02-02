import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-oranienbaum">
      <Navbar/>
      <About/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
