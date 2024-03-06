import logo from './logo.svg';
import './App.css';
import About from './componts/movis1';
import Contact from './componts/movis2';
import Home from './componts/movis3';
import NavBar from './componts/Navbar';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
     <NavBar/>
<Routes>
<Route path='/video1' element={<movis1/>}/>
<Route path='/video2' element={<movis2/>}/>




</Routes>

    </div>
  );
}

export default App;
