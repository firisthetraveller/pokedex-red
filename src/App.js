import Navbar from './Components/Navbar';
import PokemonPage from './Pages/PokemonPage';

import './App.css';
import './output.css';

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <PokemonPage name="ditto" />
      </div>
    </div>
  );
}

export default App;
