import React from "react"; // Import React for component building
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion"; // Import framer-motion for smooth animations and scroll effects
import Button from "../components/Button.jsx"; // Import the custom Button component

const Hero = () => {
  // Hook to track the vertical scroll position of the page
  const { scrollY } = useScroll();

  // Transform scroll position into movement values (y-axis) for parallex effects
  const y1 = useTransform(scrollY, [0, 500], [0, 200]); // Moves down as you scroll
  const y2 = useTransform(scrollY, [0, 500], [0, -100]); // Moves up as you scroll

  // Fades out and scales down the hero content as the user scrolls away
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  // Framer Motion variant for the container (handles entrance timing)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Animate child elements one after another
        delayChildren: 0.3, // Wait before starting the children animations
      }
    }
  };

  // Framer Motion variant for individual items (handles movement)
  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Start invisible and slightly lower
    visible: {
      opacity: 1,
      y: 0, // Move to its natural position
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // Smooth "out-expo" easing
    }
  };

  return (
    // Main Section Container - sets background and basic layout
    <section className="min-h-screen w-full flex flex-col relative overflow-hidden bg-[#010103]" id="home">
      {/* Background Visuals Container (Doesn't block clicks) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Glow Effects: Layered soft lights to create depth */}
        <div className="hero-glow top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/20" />
        <div className="hero-glow bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10" />
        <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[160px]" />

        {/* Stylized Grid: Transparent overlay to give it a techy feel */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `url('/assets/grid1.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: 'linear-gradient(to bottom, black 50%, transparent)' // Fades out the grid at the bottom
          }}
        />
      </div>

      {/* Main Content: Animates on load and fades on scroll */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity, scale }}
        className="relative z-10 flex-1 flex flex-col items-center justify-center c-space text-center"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <p className="text-blue-400 font-generalsans font-medium tracking-widest uppercase text-sm sm:text-base">
            Available for new projects
          </p>
        </motion.div>

        {/* Hero Title: Large, bold main heading */}
        <motion.h1 variants={itemVariants} className="hero_tag text-white mb-6">
          Building Digital <br />
          <span className="text-gray_gradient">Experiences</span> that Matter
        </motion.h1>

        {/* Short Bio Paragraph */}
        <motion.p variants={itemVariants} className="max-w-2xl text-[#afb0b6] text-lg sm:text-xl font-generalsans mb-10 leading-relaxed">
          Hi, I am <span className="text-white font-semibold">Chandrangshu</span>. A Software Developer specializing in
          crafting high-performance, visually stunning web applications.
        </motion.p>

        {/* Multi-Button Layout: For Actions and Links */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-center">
          {/* Main CTA: View Work button with a glow effect */}
          <a href="#projects">
            <Button
              name="View My Work"
              isBeam
              containerClass="sm:min-w-60 w-full"
            />
          </a>

          {/* Secondary Buttons: Social/Resume Links */}
          <div className="flex gap-4">
            {/* GitHub Profile Button */}
            <a
              href="https://github.com/Deep-sarkar02"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <img src="/assets/github.svg" alt="github" className="w-5 h-5 invert" />
              GitHub
            </a>
            {/* Resume Download/View Button */}
            <a
              href="https://drive.google.com/file/d/10TXAaP3hNCYnRjeJnCxDEvwhbN1MOX31/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/909/909263.png" alt="resume" className="w-5 h-5 invert" />
              Resume
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Floating Elements: Add visually dynamic background data */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        {/* Decorative Grid Image 2: Drifts based on scroll scrollY */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/4 -left-20 w-40 h-40 opacity-20 hidden lg:block"
        >
          <img src="/assets/grid2.png" alt="decorative" className="w-full h-full object-contain rotate-12" />
        </motion.div>

        {/* Decorative Grid Image 3: Drifts in the opposite direction */}
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-1/4 -right-20 w-60 h-60 opacity-20 hidden lg:block"
        >
          <img src="/assets/grid3.png" alt="decorative" className="w-full h-full object-contain -rotate-12" />
        </motion.div>

        {/* Technology Icons: Small floating logos scattered around */}
        {[
          { src: '/assets/react.svg', top: '15%', left: '10%', delay: 0 },
          { src: '/assets/tailwindcss.png', top: '20%', right: '15%', delay: 1 },
          { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', bottom: '25%', left: '15%', delay: 2 },
          { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', top: '25%', left: '20%', delay: 1.5, invert: true },
          { src: '/assets/github.svg', bottom: '15%', right: '10%', delay: 0.5, invert: true },
        ].map((icon, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.4,
              y: [0, -20, 0], // Floating up and down animation
              rotate: [0, 10, 0] // Subtle wobbling rotation
            }}
            transition={{
              delay: icon.delay,
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ position: 'absolute', top: icon.top, left: icon.left, right: icon.right, bottom: icon.bottom }}
            className="w-12 h-12 md:w-16 md:h-16 hidden sm:block"
          >
            <img src={icon.src} alt="tech" className={`w-full h-full object-contain ${icon.invert ? 'invert' : ''}`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero; // Export Hero to be assembled in App.jsx
