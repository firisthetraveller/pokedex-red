
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Header from './Components/Base/Navbar';

import './App.css';
import './output.css';
import Home from './Pages/Home';
import PokemonPage from './Pages/PokemonPage';
import { PokemonIdProvider } from './Contexts/PokemonIdContext';
import { PokemonGenerationProvider } from './Contexts/PokemonGenerationContext';
import { PokemonMoveProvider } from './Contexts/PokemonMoveContext';

function App() {
  return (
    <>
      <PokemonIdProvider>
        <PokemonGenerationProvider>
          <PokemonMoveProvider>
            <BrowserRouter basename='/pokedex-red'>
              <Header />
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
          </PokemonMoveProvider>
        </PokemonGenerationProvider>
      </PokemonIdProvider>
    </>
  );
}

export default App;
