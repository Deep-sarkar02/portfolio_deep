import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader"; // Make sure this exists
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import Target from "../components/Target.jsx";
import { calculateSizes } from "../constants/index.js";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
  // for leva
  
  // use media queries for the responsiveness
  // and give the max width of the mobile 
  // and the scale will be chnaging based upon theis
  const isMobile  = useMediaQuery({maxWidth : 768})
  //for tablets
  const isTablet  = useMediaQuery({minWidth :768 , maxWidth : 1024})
  const isSmall = useMediaQuery({maxWidth : 440})
  // create a function
  const sizes = calculateSizes(isSmall , isMobile , isTablet);

  return (
  
  <section className="min-h-screen w-full flex flex-col relative ">
  {/* Text Content - On Top */}
  <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 relative z-10">
    <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
      Hi, I am Chandrangshu <span className="waving-hand">👋</span>
    </p>
    <p className="hero_tag text-gray_gradient text-center">Learning and implementing</p>
  </div>

  {/* Canvas Section */}
  <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] z-0">
    <Canvas
      className="w-full h-full"
      camera={{ fov: 50, position: [0, 0, 20] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault position={[0, 0, 20]} />

        <HeroCamera isMobile={isMobile}>
          <HackerRoom
            position={sizes.deskPosition}
            rotation={[0, -Math.PI, 0]}
            scale={sizes.deskScale}
          />
        </HeroCamera>

        <group>
          <Target position={sizes.targetPosition} />
          <ReactLogo position={sizes.reactLogoPosition} />
          <Cube position={sizes.cubePosition} />
          <Rings position={sizes.ringPosition} />
        </group>

        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={0.5} />
      </Suspense>
    </Canvas>
  </div>

  {/* Button - Now below the Canvas */}
  <div className="flex justify-center mt-6 z-10">
    <a href="#about" className="w-fit">
      <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
    </a>
  </div>
</section>



  );
};

export default Hero;
