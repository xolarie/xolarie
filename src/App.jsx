import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./Home";
import Footer from "./components/Footer";
import Services from "./pages/services";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:serviceName" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
