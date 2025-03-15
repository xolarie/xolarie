import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './index'
import Footer from './components/Footer'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/Ser' element={<Services />} /> */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
