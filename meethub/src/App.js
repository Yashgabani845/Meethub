import './App.css';
import Appp from './Components/Appp';
import EnterForm from './Components/Appp';
import Homepage from './Components/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/enter" element={<Appp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
