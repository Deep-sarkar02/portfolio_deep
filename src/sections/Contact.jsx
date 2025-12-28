/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.send(
                'service_2b8u9b3',
                'template_909rlar',
                {
                    from_name: form.name,
                    to_name: "Chandrangshu",
                    form_email: form.email,
                    to_email: "srcs.pro5759@gmail.com",
                    message: form.message
                },
                "5KPhpeODGOscJfJL8"
            );
            setLoading(false);
            toast.success("Message sent successfully! 🚀", {
                position: "bottom-right",
                autoClose: 5000,
                theme: "dark",
            });
            setForm({ name: "", email: "", message: "" });
        } catch (error) {
            setLoading(false);
            console.error(error);
            toast.error("Something went wrong. Please try again later. ❌", {
                position: "bottom-right",
                autoClose: 5000,
                theme: "dark",
            });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="c-space my-20 relative overflow-hidden" id="contact">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none -z-10" />

            <div className="relative min-h-screen flex items-center justify-center p-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-3xl w-full bg-black-200/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden relative"
                >
                    {/* Decorative Top Bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 opacity-50" />

                    <motion.div variants={itemVariants} className="text-center mb-12">
                        <h3 className="text-4xl sm:text-5xl font-bold font-generalsans text-white mb-4">
                            Let's <span className="text-gray_gradient">Connect</span>
                        </h3>
                        <p className="text-[#afb0b6] text-lg max-w-xl mx-auto leading-relaxed">
                            Looking to build a new platform, improve an existing system, or bring a unique vision to life? I'm here to help you build what's next.
                        </p>
                    </motion.div>

                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
                        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <label className="flex flex-col gap-3">
                                <span className="text-white-600 font-medium ml-1 uppercase tracking-wider text-xs">Full Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white outline-none focus:border-blue-500/50 transition-all placeholder:text-white-500"
                                    placeholder="e.g., John Doe"
                                />
                            </label>

                            <label className="flex flex-col gap-3">
                                <span className="text-white-600 font-medium ml-1 uppercase tracking-wider text-xs">Email Address</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white outline-none focus:border-blue-500/50 transition-all placeholder:text-white-500"
                                    placeholder="e.g., john@example.com"
                                />
                            </label>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <label className="flex flex-col gap-3">
                                <span className="text-white-600 font-medium ml-1 uppercase tracking-wider text-xs">Your Message</span>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white outline-none focus:border-blue-500/50 transition-all placeholder:text-white-500 resize-none"
                                    placeholder="Tell me about your project or just say hi..."
                                />
                            </label>
                        </motion.div>

                        <motion.button
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-4 rounded-xl text-white font-bold text-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Discovering Magic..." : "Send Message"}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="w-4 h-4" />
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
