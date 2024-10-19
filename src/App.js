
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';

import './App.css';
import './output.css';
import Home from './Pages/Home';
import PokemonPage from './Pages/PokemonPage';

function App() {
  return (
    <div>
      <BrowserRouter basename='/pokedex-red'>
        <Navbar />
        <div className='min-h-16' />
        <div>
          <Routes>
            <Route index element={<Navigate to="/home" replace />} />
            <Route path="home" element={<Home />} />
            <Route path="pokemon/:name" element={<PokemonPage />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
