
import './App.css';
import { Footer } from './Component/Footer';
import { Heritage } from './Component/Heritage';


import Navbar from './Component/Navbar';
import Home2 from './Component/Home2';
import Slide from './Component/Slide';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Slide/>
      <Home2/>
      <Heritage/>
      <Footer/>
    </div>
  );
}

export default App;
