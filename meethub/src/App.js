import './App.css';
import Homepage from './Components/Homepage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
     
      <Router>
        <Routes>
         
            <Route path="/" element={<Homepage />} />
          
        </Routes>

      </Router>
     
    </div>
  );
}

export default App;
