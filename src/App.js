import './App.css';
import NavBar from './components/NavBar'

import Home from './pages/Home'
import Footer from './components/Footer'
import Pepproni from './pages/pepperoni';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/recipe/pepperoni' element={<Pepproni />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
