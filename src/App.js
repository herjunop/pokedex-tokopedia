/** @jsxImportSource @emotion/react */

import {Routes, Route} from 'react-router-dom'
import { HomePage } from './Pages/HomePage';
import { ListPage } from './Pages/ListPage';
import { DetailPage } from './Pages/DetailPage';
import { PokedexPage } from './Pages/PokedexPage';
import { BottomBar } from './Components/BottomBar';
import { AppStyle } from './Styles/PagesStyle';

function App() {
  return (
    <div css={AppStyle}>
      <div className='topbar'>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route path='/pokemon-list' element={<ListPage/>}/>
          <Route path='/detail/:name' element={<DetailPage/>}/>
          <Route path='/pokedex' element={<PokedexPage/>}/>
        </Routes>
      </div>
      <BottomBar/>
    </div>
  );
}

export default App;
