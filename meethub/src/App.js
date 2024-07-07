import './App.css';
import Homepage from './Components/Homepage';
import VideoCall from './Components/Videocall';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const { io } = require("socket.io-client");

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/videocall" element={<VideoCall />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
