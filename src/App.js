
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';

import './App.css';
import './output.css';
import Home from './Pages/Home';
import PokemonPage from './Pages/PokemonPage';
import { PokemonIdProvider } from './Contexts/PokemonIdContext';

function App() {
  return (
    <div>
      <PokemonIdProvider>
        <BrowserRouter basename='/pokedex-red'>
          <Navbar />
          <div className='min-h-16' />
          <div>
            <Routes>
              <Route index element={<Navigate to="/home/0/20" replace />} />
              <Route path="home/:offset/:limit" element={<Home />} />
              <Route path="pokemon/:name" element={<PokemonPage />} />
              <Route path="*" element={<Navigate to="/home/0/20" />} />
            </Routes>
          </div>
        </BrowserRouter>
      </PokemonIdProvider>
    </div>
  );
}

export default App;
