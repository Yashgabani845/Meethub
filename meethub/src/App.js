import './App.css';
import Homepage from './Components/Homepage';
import VideoCall from './Components/Videocall';
import Enterform from './Components/Enterform';
import SocketProvider from './Components/Socket';
import PeerProvider from "./Components/Peer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Room from './Components/Room';

function App() {
  return (
    <div className="App">
      <SocketProvider>
        <PeerProvider>
      <Router>
        <Routes>
         
            <Route path="/" element={<Homepage />} />
            <Route path="/enter/meeting/:code" element={<Room />} />
            <Route path="/videocall" element={<VideoCall />} />
            <Route path="/enter" element={<Enterform />} />
         
        </Routes>

      </Router>
      </PeerProvider>
      </SocketProvider>
    </div>
  );
}

export default App;
