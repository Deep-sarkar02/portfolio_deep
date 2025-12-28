import React, { useState } from "react"; // Import React and useState for state management
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion"; // Import components for animations
import { myProjects } from "../constants"; // Import the projects data from constants

const Projects = () => {
    // State to track which project is currently being viewed
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    // Total number of projects in the array
    const projcount = myProjects.length;

    // Get the data for the currently selected project
    const currproj = myProjects[selectedProjectIndex];

    // Function to change the current project when arrows are clicked
    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                // If at the start, go to the last project; otherwise go back one
                return prevIndex === 0 ? projcount - 1 : prevIndex - 1;
            } else {
                // If at the end, go to the first project; otherwise go forward one
                return prevIndex === projcount - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    return (
        <section className="c-space my-20" id="work">
            {/* Header Text */}
            <p className="head-text">My Projects</p>

            {/* Layout Container for Project Details and Preview */}
            <div className="mt-12 flex justify-center w-full">
                {/* Project Details Panel (Left side on desktop) */}
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 bg-black-200 rounded-2xl max-w-4xl w-full">
                    {/* Background Spotlight Image */}
                    <div className="absolute top-0 right-0 opacity-30">
                        <img src={currproj.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
                    </div>

                    {/* Project Logo with Glass effect */}
                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg z-10" style={currproj.logoStyle}>
                        <img src={currproj.logo} alt="logo" className="w-10 h-10 shadow-sm" />
                    </div>

                    {/* Project Title and Description with entrance animations */}
                    <div className="flex flex-col gap-5 text-white-600 my-5 z-10">
                        <motion.p
                            key={`title-${selectedProjectIndex}`} // Key change triggers the animation
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-white text-2xl font-semibold"
                        >
                            {currproj.title}
                        </motion.p>
                        <motion.p
                            key={`desc-${selectedProjectIndex}`}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            {currproj.desc}
                        </motion.p>
                        <motion.p
                            key={`subdesc-${selectedProjectIndex}`}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {currproj.subdesc}
                        </motion.p>
                    </div>

                    {/* Tech Stack Icons and Live Link */}
                    <div className="flex items-center justify-between flex-wrap gap-5 z-10">
                        <div className="flex items-center gap-3">
                            {/* Render small icons for each tech used */}
                            {currproj.tags.map((t, i) => (
                                <div key={i} className="tech-logo">
                                    <img src={t.path} alt={t.name} />
                                </div>
                            ))}
                        </div>
                        {/* URL to the live website */}
                        <a className="flex items-center gap-2 cursor-pointer text-white-600 hover:text-white transition-colors" href={currproj.href} target="_blank" rel="noreferrer">
                            <p>Check Live Site</p>
                            <img src="/assets/arrow-up.png" className="w-3 h-3" alt="arrow" />
                        </a>
                    </div>

                    {/* Navigation Buttons (Left/Right arrows) */}
                    <div className="flex justify-between items-center mt-7 z-10">
                        <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                            <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4" />
                        </button>

                        <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                            <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Project Preview Area (Right side / Visual) */}
                <div className="bg-black-300 rounded-2xl flex items-center justify-center p-5 relative overflow-hidden group min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {/* Animates the transition between project images/videos */}
                        <motion.div
                            key={selectedProjectIndex}
                            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="relative w-full h-full flex items-center justify-center"
                        >
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                                {/* Glass Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent z-10 pointer-events-none" />

                                {/* Show Video if it's an MP4, otherwise show Image */}
                                {currproj.texture.endsWith('.mp4') ? (
                                    <video
                                        src={currproj.texture}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <img
                                        src={currproj.texture}
                                        alt="project preview"
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>

                            {/* Floating background glow on hover */}
                            <div className="absolute -inset-4 bg-blue-500/5 blur-3xl rounded-full z-0 group-hover:bg-blue-500/10 transition-colors duration-500" />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Projects; // Export for use in App.jsx
