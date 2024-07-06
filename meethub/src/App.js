import './App.css';
import Navbar from './Components/Navbar';
import Mainview from './Components/Mainview';
import Midview from './Components/Midview';
import Footer from './Components/Footer';
import Bottomview from './Components/Bottomview';
function App() {
  return (
    <div className="App">
  <Navbar/>  
  <Mainview/>
  <Midview/>
  <Bottomview/>
  <Footer/>
    </div>
  );
}

export default App;
