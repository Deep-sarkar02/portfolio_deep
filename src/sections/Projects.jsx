import React, { useState } from "react";
import { myProjects } from "../constants";
import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";
import { OrbitControls } from "@react-three/drei";
const Projects = ()=>
{
    // crete a curr proj to store the myproject[0]
    /*const currproj = myProjects[0];*/


    // this usestate will be uused in the handle navigation function
    const [selectedProjectIndex , setSelectedProjectIndex] = useState(0);
    
    // get the length of the project
    const projcount = myProjects.length;
    // handlenavigation function
    const currproj = myProjects[selectedProjectIndex];
    const handleNavigation = (direction) =>
    {
        // on the basis of the direction we will move the indedx of the project
        setSelectedProjectIndex((prevIndex)=>
        {
            // the diredction is previous directions
            if(direction ==='previous')
            {
                // check if the previndex == 0
                return prevIndex === 0 ? projcount -1 : prevIndex-1
            }
            else{
                return prevIndex === projcount-1 ? 0 : prevIndex+1
            }
        })
    }



    return(
        // now we will make it a section
        <section className="c-space my-20">
            <p className="head-text">My Work</p>

            {/*1st div */}
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full" >
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    
                    {/**for the logo of the project */}
                    <div className="absolute top-0 right-0 ">
                        {/**NOW WE WILL GET THE PROJECT DETAILS FROM NY PROJECT */}
                        <img src={currproj.spotlight} alt="splotlight" className="w-full h-96 object-cover rounded-xl" />
                    </div>

                    {/*display the project logo */}
                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currproj.logoStyle}>
                    <img src= {currproj.logo} alt="logo" className="w-10 h-10 shadow-sm" />
                    </div>

                    {/**for the title of the project */}
                    <div className="flex flex-col gap-5 text-white-600 my-5">
                            <p className="text-white text-2xl font-semibold animatedText">{currproj.title}</p>
                            <p className="animatedText">{currproj.desc}</p>
                            <p className="animatedText">{currproj.subdesc}</p>
                    </div>

                    {/** for the techstack */}
                    <div className="flex items-center justify-between flex-wrap gap-5">
                            <div className="flex items-center gap-3">
                                {currproj.tags.map((t ,i)=>(
                                    <div key = {i} className="tech-logo">
                                        <img src={t.path} alt={t.name} />
                                    </div>
                                ))}
                            </div>
                            {/**now wew ill open the live view of the work or the project done target  = _black means it will opemn ina new page not close the portfolio page */}
                            <a className="flex items-center gap-2 cursor-pointer text-white-600" href={currproj.href} target="_blank" rel="noreferrer">
                                <p>Check Live Site</p>
                                <img src="/assets/arrow-up.png" className="w-3 h-3" alt="arrow" />
                            </a>
                    </div>
                    
                    
                    {/** for the arrow to see the other works */}
                    {/** now we will  use the handle Navigation function */}
                    <div className="flex justify-between items-center mt-7">
                                <button className="arrow-btn" 
                                        onClick={()=>handleNavigation('previous')}>
                                            <img src="/assets/left-arrow.png" alt="left  arrow" className="w-4 h-4" />
                                </button>
                                
                                <button className="arrow-btn" 
                                        onClick={()=>handleNavigation('next')}>
                                            <img src="/assets/right-arrow.png" alt="right  arrow" className="w-4 h-4" />
                                </button>
                    </div>



                </div>


                {/** for the next live showing section we will do  it here */}
                <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                    {/**here weill ahain use the canvas from the react three fiber */}
                    <Canvas>
                        {/**first render the light */}
                        <ambientLight intensity={Math.PI }/>
                        <directionalLight position = {[10 ,10 , 5 ]} />
                        
                        {/**now we will render the center from the react three drie */}
                        <Center>
                                {/** we can also use the suspense to load the 3d model  and we willl use the fallback as the canvasloader */}
                                <Suspense fallback = {<CanvasLoader/>}>

                                    {/**here we will render a group of elements  */}
                                    {/**size can be changedd by the scale  also we will mention the position of the model on the x, y , z axis and also we will use the rotaion*/}
                                    <group scale={2} position={[0 , -3 ,0 ]} rotation={[0 ,-0.1 , 0 ]}>



                                        {/** when the slide will be changed then the vedio wil also be changed by the texture props */}
                                        <DemoComputer texture = {currproj.texture} />
                                    </group>
                                </Suspense>
                        </Center>
                        {/**we will add more controls from the react three fiber */}
                        <OrbitControls maxPolarAngle = {Math.PI / 2} enableZoom = {false}/>
                    </Canvas>
                </div>
            </div>


        </section>
       
    )
}
export default Projects