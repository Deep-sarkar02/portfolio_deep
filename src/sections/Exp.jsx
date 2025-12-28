import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { workExperiences } from "../constants";

const Exp = () => {
    return (
        <section className="c-space my-20">
            <div className="w-full text-white-600">
                <h3 className="head-text">
                    My Work Experience
                </h3>

                <div className="work-container">
                    <div className="work-canvas flex flex-col items-center justify-center bg-black-200 rounded-xl overflow-hidden relative p-8">
                        {/* Expertise Focus Area */}
                        <div className="relative z-10 w-full flex flex-col items-center text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="w-32 h-32 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-[1px] mb-6 shadow-2xl"
                            >
                                <div className="w-full h-full rounded-3xl bg-black-200 flex items-center justify-center overflow-hidden">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/924/924915.png"
                                        alt="Developer Avatar"
                                        className="w-full h-full object-cover p-4"
                                    />
                                </div>
                            </motion.div>

                            <h4 className="text-white text-2xl font-bold mb-2">Full-Stack Architect</h4>
                            <p className="text-gray-400 text-sm mb-8 max-w-[200px]">
                                Specializing in scalable MERN applications and high-performance user interfaces.
                            </p>

                            <div className="flex flex-wrap justify-center gap-2">
                                {['React', 'Node.js', 'MongoDB', 'Express', 'Framer Motion'].map((skill, i) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-blue-400 font-medium uppercase tracking-wider"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="work-content !bg-transparent !border-none">
                        <div className="flex flex-col gap-5">
                            {workExperiences.map(({ id, name, pos, icon, duration, title }) => (
                                <motion.div
                                    key={id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="work-content_container group !bg-black-200 !border !border-black-300 hover:!border-blue-500/30 hover:!bg-black-300/50"
                                >
                                    <div className="flex flex-col h-full justify-center items-center py-2">
                                        <div className="work-content_logo !bg-black-300 border border-white/5 group-hover:border-blue-500/50 transition-colors">
                                            <img src={icon} alt="logo" className="w-full h-full object-contain" />
                                        </div>
                                        <div className="work-content_bar" />
                                    </div>

                                    <div className="sm:p-5 px-2.5 py-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <p className="font-bold text-white text-lg">
                                                    {name}
                                                </p>
                                                <p className="text-blue-400 text-xs font-medium uppercase tracking-tighter">
                                                    {pos}
                                                </p>
                                            </div>
                                            <p className="text-gray-500 text-[10px] font-mono whitespace-nowrap pt-1">
                                                {duration}
                                            </p>
                                        </div>
                                        <p className="text-[#afb0b6] text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                                            {title}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Exp;
