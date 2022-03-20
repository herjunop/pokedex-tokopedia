import {Routes, Route} from 'react-router-dom'
import { HomePage } from './Pages/HomePage';
import { ListPage } from './Pages/ListPage';
import { useNavigate } from "react-router-dom";
import { DetailPage } from './Pages/DetailPage';
import { PokedexPage } from './Pages/PokedexPage';

function App() {
  const navigate = useNavigate()

  const handleHomeClick = () => {
    navigate('/')
  }

  const handleListClick = () => {
    navigate('/pokemon-list')
  }

  const handlePokedexClick = () => {
    navigate('/pokedex')
  }

  return (
    <div>
      Test
      <div>
        <a onClick={handleHomeClick}>
          Go to Home
        </a>
        <a onClick={handleListClick}>
          Go to Pokemon List
        </a>
        <a onClick={handlePokedexClick}>
          Go to Pokedex
        </a>
      </div>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/pokemon-list' element={<ListPage/>}/>
        <Route path='/detail/:name' element={<DetailPage/>}/>
        <Route path='/pokedex' element={<PokedexPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
