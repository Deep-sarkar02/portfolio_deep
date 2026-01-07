import React from 'react';
import { motion } from 'framer-motion';

const CodingSkills = () => {
    const leetcodeUser = 'deep-002S';
    const gfgUser = 'chandrangshum518';

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <section className="c-space my-20" id="skills">
            <div className="flex flex-col items-center">
                <p className="head-text text-center">My Coding <span className="text-gray_gradient">Stats</span></p>
                <p className="text-gray-400 mt-4 text-center max-w-2xl">
                    Track my progress and problem-solving journey across top competitive programming platforms.
                </p>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 w-full max-w-5xl"
                >
                    {/* LeetCode Card */}
                    <motion.div variants={itemVariants} className="coding-card group">
                        <a
                            href={`https://leetcode.com/u/${leetcodeUser}/`}
                            target="_blank"
                            rel="noreferrer"
                            className="block relative p-1 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <img
                                src={`https://leetcard.jacoblin.cool/${leetcodeUser}?theme=dark&font=Inter&ext=activity`}
                                alt="LeetCode Stats"
                                className="w-full h-auto rounded-2xl"
                            />
                            <div className="p-4 flex justify-between items-center text-white/50 text-sm">
                                <span>Problem Solving on LeetCode</span>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-5 h-5 opacity-50" alt="python" />
                            </div>
                        </a>
                    </motion.div>

                    {/* GFG Card - Using a custom-styled card since a common image API is less standard for GFG */}
                    <motion.div variants={itemVariants} className="coding-card group h-full">
                        <a
                            href={`https://www.geeksforgeeks.org/profile/${gfgUser}`}
                            target="_blank"
                            rel="noreferrer"
                            className="block relative p-6 h-full rounded-3xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                        >
                            <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-green-500/10 rounded-xl">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="w-8 h-8" alt="GFG" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">GeeksforGeeks</h3>
                                    <p className="text-gray-400 text-sm">@{gfgUser}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
                                    <span className="text-gray-400">Coding Profile</span>
                                    <span className="text-green-400 font-semibold">Active</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
                                    <span className="text-gray-400">Competitive Edge</span>
                                    <span className="text-white">Professional Data</span>
                                </div>
                            </div>

                            <div className="mt-8 flex items-center justify-center gap-2 text-white/70 font-semibold group-hover:text-green-400 transition-colors">
                                View GFG Profile
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CodingSkills;
