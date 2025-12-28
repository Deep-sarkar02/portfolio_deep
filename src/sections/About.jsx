import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Button from "../components/Button";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handlecopy = () => {
        navigator.clipboard.writeText("chandrangshu.vit@gmail.com")
        setHasCopied(true)
        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Hi, I am Chandrangshu</p>
                            <p className="grid-subtext">
                                Boosting my skills in frontend and backend development, empowering myself to build beautiful SaaS applications.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <div className="relative w-full sm:h-[276px] h-fit flex items-center justify-center bg-black-200 rounded-xl overflow-hidden group">
                            {/* Interactive MERN Icons */}
                            <div className="relative w-full h-full flex items-center justify-center p-4">
                                <div className="grid grid-cols-2 gap-6 relative">
                                    {[
                                        { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: 'bg-green-500/10' },
                                        { name: 'Express', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', color: 'bg-white/10', invert: true },
                                        { name: 'React', src: '/assets/react.svg', color: 'bg-blue-500/10' },
                                        { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: 'bg-green-600/10' }
                                    ].map((tech) => (
                                        <motion.div
                                            key={tech.name}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            className={`w-20 h-20 rounded-2xl ${tech.color} border border-white/5 flex flex-col items-center justify-center p-3 transition-colors hover:border-white/20`}
                                        >
                                            <img
                                                src={tech.src}
                                                alt={tech.name}
                                                className={`w-10 h-10 object-contain mb-1 ${tech.invert ? 'invert' : ''}`}
                                            />
                                            <span className="text-[10px] font-medium text-gray-400">{tech.name}</span>
                                        </motion.div>
                                    ))}

                                    {/* Central Glow Effect */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 rounded-full blur-[40px] pointer-events-none -z-10" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="grid-headtext">MERN Stack</p>
                            <p className="grid-subtext">
                                Specialized in building full-stack applications using MongoDB, Express, React, and Node.js for scalable web solutions.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center overflow-hidden bg-black-200 relative group">
                            {/* 2D Animated World Map/Globe Representation */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                className="relative w-64 h-64 rounded-full border border-white/5 flex items-center justify-center"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-2xl" />
                                <img
                                    src="/assets/grid1.png"
                                    alt="world"
                                    className="w-48 h-48 opacity-30 invert group-hover:opacity-50 transition-opacity"
                                />
                            </motion.div>

                            <div className="absolute inset-0 flex items-center justify-center p-5 text-center z-10">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    className="bg-black-100/50 backdrop-blur-md p-4 rounded-xl border border-white/10"
                                >
                                    <p className="text-white text-sm font-medium">Remote Work Ready</p>
                                    <p className="text-gray-400 text-xs">Available for all timezones</p>
                                </motion.div>
                            </div>
                        </div>
                        <div>
                            <p className="grid-headtext">
                                I work remotely across most timezones
                            </p>
                            <p className="grid-subtext">
                                I am based in India, with remote work available.
                            </p>
                            <a href="#contact">
                                <Button name="Contact me" isBeam containerClass="w-full mt-10" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">My passion for coding</p>
                            <p className="grid-subtext">Love solving problems; coding is not just my profession, it's my passion.</p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handlecopy}>
                                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">chandrangshu.vit@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
