import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from '../pages/Home';
import Conocenos from '../components/conocenos/Conocenos';
import Menu from '../components/menu/Menu';
import Navegador from '../routes/Navegador';
import Reservas from '../components/reservaciones/Reservas';
import { homeData } from '../components/dataPage'

function App() {



  return (
    <div className="App">
      <Navegador />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Conocenos' element={<Conocenos />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Reservaciones' element={<Reservas />} />
        <Route path='*' element={<main style={{ padding: "1rem" }}><p>Esta Pagina no Existe!</p></main>} />
      </Routes>

    </div>
  );
}

export default App;
