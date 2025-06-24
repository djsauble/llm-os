import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Home from './pages/Home';
import CreateApp from './pages/CreateApp';
import ViewApp from './pages/ViewApp';
import './App.css';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app/create" element={<CreateApp />} />
          <Route path="/app/:id" element={<ViewApp />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
