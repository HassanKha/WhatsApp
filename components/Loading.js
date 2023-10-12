import React from 'react'
import Whatslogo from "../logos/whatslogo.png";
import Image from "next/image";
import {Circle} from "better-react-spinkit"
function Loading() {
  return (
    <center style={{display: "grid" ,height: "100vh" ,placeItems: "center"}}>
        <div>
            <Image src={Whatslogo}
            alt="whatslogo"
            height={200}
            style={{marginBottom:10}}
            
            />
            <Circle color="#3CBC28" size={60}/>
        </div>
    </center>
  )
}

export default Loading