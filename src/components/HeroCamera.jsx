import { useFrame } from "@react-three/fiber";
import React from "react";
import { useRef } from "react"
import {easing} from 'maath'
const HeroCamera = ({children ,isMobile })=>
{
    const groupRef = useRef();
    // now useframe
    useFrame((state , delta) =>
    {
        easing.damp3(state.camera.position ,[0 , 0 , 15] , 0.25 , delta)
    

    // if not ismobile
    //for the desktop view
        if(! isMobile)
        {
            easing.dampE(groupRef.current.rotation,[-state.pointer.y /3 , -state.pointer.x /5, 0] , 0.25 , delta)
        }
    
    })
    return(
        // for the size of the hackerroom we will chnage the scale
        <group ref={groupRef} scale={0.8}> 
            {children}
        </group>
    )
}
export default HeroCamera