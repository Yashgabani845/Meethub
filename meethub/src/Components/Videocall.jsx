import React ,{useEffect,useRef,useState} from "react";
const VideoCall = ()=>{
    const [socket,setSocket] = useState(null);
    const localVideoref=useRef(null);
    const remoteVideoref=useRef(null);
    const peerConnection = useRef(null);
    const [isCallStarted,setIsCallStated]=useState(fasle);

    useEffect(()=>{
        const s = io('http://localhost:3001')
        setSocket(s);
        s.on('message',handleSignalingData);
        return () => {
            s.disconnect();
          };
    },[])
    return (
        <div>
            
        </div>
    );
}
export default VideoCall;
