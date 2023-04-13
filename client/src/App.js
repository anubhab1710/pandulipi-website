import About from "./components/AboutUs/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Team from "./components/Team/Team";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import BlogPage from "./components/BlogPage/BlogPage";
import Library from "./components/eLibrary/Library";
import Error from "./components/Error";
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import CreateBlog from "./components/BlogPage/CreateBlog";

function App() {
  return (
    <div className="font-oranienbaum">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery/*" element={<Gallery />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/createblog" element={<CreateBlog />} />
        <Route path="/elibrary" element={<Library />} />
        <Route path="/team" element={<Team />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
