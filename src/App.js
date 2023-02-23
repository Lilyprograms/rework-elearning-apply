import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./layouts/Footer";
import CourseDetails from "./pages/CourseDetails";
import HomeLayout from "./layouts/HomeLayout";
import ScrollToTop from "./layouts/ScrollToTop";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/details" element={<CourseDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
