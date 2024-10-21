
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';

import './App.css';
import './output.css';
import Home from './Pages/Home';
import PokemonPage from './Pages/PokemonPage';
import { PokemonIdProvider } from './Contexts/PokemonIdContext';
import { PokemonGenerationProvider } from './Contexts/PokemonGenerationContext';

function App() {
  return (
    <>
      <PokemonIdProvider>
        <PokemonGenerationProvider>
          <BrowserRouter basename='/pokedex-red'>
            <Navbar />
            <div className='min-h-16' />
            <div>
              <Routes>
                <Route index element={<Navigate to="/home/0/40" replace />} />
                <Route path="home/:offset/:limit" element={<Home />} />
                <Route path="pokemon/:name" element={<PokemonPage />} />
                <Route path="*" element={<Navigate to="/home/0/40" />} />
              </Routes>
            </div>
          </BrowserRouter>
        </PokemonGenerationProvider>
      </PokemonIdProvider>
    </>
  );
}

export default App;
