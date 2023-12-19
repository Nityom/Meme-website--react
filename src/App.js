import Header from './Components/Header';
import Navbarr from './Components/Navbarr';
import './App.css';
import Bada from './Components/Bada';
import Mudda from './Components/Mudda';
// import { Navbar } from 'react-bootstrap';

function App() {
  return ( 
  <div>   
    <div><Header/></div>
     <div className='navbar'>
      <Navbarr/></div>
   <div classname="mudda">
    <Mudda/>
   </div>
   
 
  </div>
  
  );
}

export default App;
