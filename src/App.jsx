import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Services from './pages/services/Services'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Ser' element={<Services />} />
      </Routes>
    </Router>
  )
}

export default App
