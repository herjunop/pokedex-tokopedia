import {Routes, Route} from 'react-router-dom'
import { HomePage } from './Pages/HomePage';
import { ListPage } from './Pages/ListPage';
import { DetailPage } from './Pages/DetailPage';
import { PokedexPage } from './Pages/PokedexPage';
import { BottomBar } from './Components/BottomBar';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/pokemon-list' element={<ListPage/>}/>
        <Route path='/detail/:name' element={<DetailPage/>}/>
        <Route path='/pokedex' element={<PokedexPage/>}/>
      </Routes>
      <BottomBar/>
    </div>
  );
}

export default App;
