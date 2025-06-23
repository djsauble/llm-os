import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Definition from './pages/Definition';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/definition" element={<Definition />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
