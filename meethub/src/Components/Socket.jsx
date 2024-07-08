import React, { useMemo } from "react";
import {io} from "socket.io-client";
const SocketContext =React.createContext(null);

//useSocket will return content data of socketprovider
export const useSocket = ()=>{
    return React.useContext(SocketContext);
}
// basically we have to create content such that we can share the socket at whole hirarchy even 
//in childrens without passing in each props
const SocketProvider = (props)=>{
    const socket = useMemo(()=>io('http://localhost:5001',[])
)
    return(
        <SocketContext.Provider value={{socket}}>
            {props.children}
        </SocketContext.Provider>
    )
}

export default SocketProvider;