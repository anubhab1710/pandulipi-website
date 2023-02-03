import About from "./components/AboutUs/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Team from "./components/Team/Team";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import EventsGallery from "./components/Gallery/EventsGallery";
import BlogPage from "./components/BlogPage/BlogPage";
import Library from "./components/eLibrary/Library";

function App() {
  return (
    <div className="font-oranienbaum">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<EventsGallery />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/elibrary" element={<Library />} />
        <Route path="/team" element={<Team />} />
        {/* <Route path="" */}
      </Routes>
      {/* <Team />
      <About /> */}
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
