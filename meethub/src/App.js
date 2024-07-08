import './App.css';
import Homepage from './Components/Homepage';
import VideoCall from './Components/Videocall';
import Enterform from './Components/Enterform';
import SocketProvider from './Components/Socket';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const { io } = require("socket.io-client");

function App() {
  return (
    <div className="App">
      <SocketProvider>
      <Router>
        <Routes>
         
            <Route path="/" element={<Homepage />} />
            
            <Route path="/videocall" element={<VideoCall />} />
            <Route path="/enter" element={<Enterform />} />
         
        </Routes>

      </Router>
      </SocketProvider>
    </div>
  );
}

export default App;
