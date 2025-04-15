import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./Home";
import Footer from "./components/Footer";
import Services from "./pages/services";
import Solutions from "./pages/solutions";
import Resources from "./pages/resources";
import Career from "./pages/career";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:serviceName" element={<Services />} />
        <Route path="/solutions/:solutionName" element={<Solutions />} />
        <Route path="/resources/:resourceName" element={<Resources />} />
        <Route path="/careers/:careerName" element={<Career />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
