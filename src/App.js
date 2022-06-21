import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar1 from './components/Navbar1';
import Showcase from './components/Showcase';

function App() {
  return (
   <div>
    <Navbar1/>
      <div className='main'>
     <Showcase/>
      </div>
   </div>
  );
}

export default App;
