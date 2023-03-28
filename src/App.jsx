import { Router, BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Navbar from './components/layout/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <>
      <Navbar />
  
      <Routes>
        <Route exact path='/'Component={Home}/>
        <Route exact path='/Contact'Component={Contact}/>
        <Route exact path='/About'Component={About}/>
      </Routes>

    
    </>


  );
}

export default App;
