import React, { useState } from "react";
// import globe
import Globe from "react-globe.gl";
// import button
import Button from "../components/Button";
const   About= ()=>
{
    const[hasCopied , setHasCopied] = useState(false);
    // handlecopy function
    const handlecopy = ()=>
    {
        // we will copy the email to the clipboard
        navigator.clipboard.writeText("chandrangshu.vit@gmail.com")
        // now we will save the state or the copied state
        // so we will move to the up of the function
        // after copy we will make the hascopy to true
        setHasCopied(true)
        // now willl set the timeout
        // after some time it will be reset
        setTimeout(()=>
        {
            // reset to false
            setHasCopied(false)
        } , 20000)
    }


    return(
        <section className="c-space my-20" id="about">
            
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 
                            md:grid-cols-2 grid-cols-1 gap-5 h-full">
            {/**for the extralarge device the grid cols will be 3 */}

            {/* first div col-span-1 xl:row-span-3 */}
            <div className="col-span-1 xl:row-span-3">


                     {/* 1st element in the matrix*/}
                    <div className="grid-container">
                            <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

                            <div > 
                                <p className="grid-headtext">Hi, I m chandrangshu</p>
                                <p className="grid-subtext">
                                    boosting my skills in the frontend and the backend and empowring myself to build beutiful saas applications.
                                </p>
                            </div>
                    </div>
            
            </div>


            {/* 2nd div col-span-1 xl:row-span-3 */}
            <div className="col-span-1 xl:row-span-3">
                    
                    {/* 2nd element in the matrix*/}
                    <div className="grid-container">
                    <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain" />
                        <div > 
                                <p className="grid-headtext">Tech Stack</p>
                                <p className="grid-subtext">
                                    boosting my skills in the frontend and the backend and empowring myself to build beutiful saas applications.
                                </p>
                        </div>
                    </div>
            </div>




            {/* 3rd div col-span-1 xl:row-span-3 */}
            <div className="col-span-1 xl:row-span-4">


                <div className="grid-container">
                    <div className="rounded-3xl w-full sm:h-[326] h-fit flex justify-center items-center">
                        {/*heer we will use a 3d globe ,  from the package , react-globe :-npm install react-globe.gl*/}
                        {/*now we will import it and render it , by pasing some of the additional props */}
                        <Globe
                            height={326}
                            width={326}
                            backgroundColor="rgba(0 , 0 , 0 , 0)"
                            backgroundImageOpacity={0.5}
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            //labelsData={[{lat :100 , lng : -100 , text : "I am here!" , color : "white" , size : 100 }]}
                            />
                    </div>
                    <div>
                        <p className="grid-headtext">
                            I work remotely across the most timezones
                        </p>

                        <p className="grid-subtext">
                            I am based in India, with remote work avialable
                        </p>

                        {/*here we will use the button component ans we will import it */}
                        <Button
                            name = "Contact me" isBeam containerClass= "w-full mt-10"/>
                    </div>
                </div>
            </div>
            
            

              {/* 4th div col-span-1 xl:row-span-3 */}
               <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">My passion for coding</p>\
                            <p className="grid-subtext">love solving problems , coding is not my profession , it's my passion </p>
                        </div>
                    </div>
               </div>



            {/* 5th div col-span-1 xl:row-span-3 */}
            <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                    <div className="space-y-2">
                        <p className="grid-subtext text-center">Contact me</p>
                        <div className="copy-container" onClick={handlecopy}>
                            <img src= {hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                            <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white ">chandrangshu.vit@gmail.com</p>
                        </div>
                        
                    </div>
                </div>
            </div>


            

            </div>
        </section>
    )
}
export default About