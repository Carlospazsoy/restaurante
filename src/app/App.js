import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css';
import Home from '../pages/Home';
import Conocenos from '../components/conocenos/Conocenos';
import Menu from '../components/menu/Menu';

function App() {
  return (
    <div className="App">
      <nav>
        <div>
          <div>
            <ul>
              <li>
                <NavLink to="/Menu">Menu</NavLink>
              </li>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Conocenos">Conocenos</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Conocenos' element={<Conocenos />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='*' element={<main style={{ padding: "1rem" }}><p>Esta Pagina no Existe!</p></main>} />
      </Routes>
    </div>
  );
}

export default App;
