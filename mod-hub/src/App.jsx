import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import About from './pages/About'
import Users from './pages/Users'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <div style={{ paddingTop: '40px' }}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App