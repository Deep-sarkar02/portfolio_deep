import React from "react";
import { clientReviews } from "../constants";
const Experience = ()=>
{
    return(
        <section className="c-space my-20">
            <h3 className="head-text">My Experiences</h3>

            {/**now we will display the card of the experiences*/}
            <div className="client-container">
                {clientReviews.map((item)=>(
                    // each of the div key will be item.id
                    <div key={item.id} className="client-review">
                        <div>
                            <div className="client-content">
                                <div className="flex gap-3">
                                        <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full" />
                                        
                                        <div className="flex flex-col">
                                                <p className="flex-semibold text-white-800">{item.name}</p>
                                                <p className="text-white-500 md:text-base text-sm font-light">{item.position}</p>
                                        </div>
                                </div>
                                <div>
                                    
                                </div>
                            </div>

                            <p className="text-white font-light">
                                {item.review}
                            </p>

                            
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Experience;