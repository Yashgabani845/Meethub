import './App.css';
import EnterForm from './Components/Enterform';
import Homepage from './Components/Homepage';
import Meeting from './Components/Meeting'; // Import the Meeting component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/enter" element={<EnterForm />} />
          <Route path="/meeting/:roomId" element={<Meeting />} /> {/* Define the Meeting route */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
