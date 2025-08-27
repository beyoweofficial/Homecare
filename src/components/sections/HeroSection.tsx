import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useLocation } from '../../context/LocationContext';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Center } from '@react-three/drei';

// 3D Text Component
const AnimatedText = () => {
  const textRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
      textRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1 + 0.1;
    }
  });

  return (
    <Center>
      <Text
        ref={textRef}
        fontSize={0.8}
        color="#6f2da8"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.woff"
      >
        hoMediCare
      </Text>
    </Center>
  );
};

// Floating Particles
const Particles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 200;
  
  // Create particles
  const particlesPosition = new Float32Array(count * 3);
  const particlesScale = new Float32Array(count);
  
  for (let i = 0; i < count; i++) {
    particlesPosition[i * 3] = (Math.random() - 0.5) * 10;
    particlesPosition[i * 3 + 1] = (Math.random() - 0.5) * 10;
    particlesPosition[i * 3 + 2] = (Math.random() - 0.5) * 10;
    particlesScale[i] = Math.random();
  }
  
  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      particlesRef.current.rotation.x = clock.getElapsedTime() * 0.03;
    }
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-scale"
          count={count}
          array={particlesScale}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#8b42ff"
        sizeAttenuation
        transparent
        alphaMap={new THREE.TextureLoader().load('/textures/particle.png')}
      />
    </points>
  );
};

// Scene
const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <AnimatedText />
      <Particles />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </>
  );
};

const HeroSection = () => {
  const { selectedDistrict } = useLocation();
  
  return (
    <section className="relative min-h-screen pt-20 flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50 to-white dark:from-neutral-900 dark:via-primary-900/10 dark:to-neutral-900 z-0" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-2">
              <MapPin className="w-5 h-5 text-primary-700 dark:text-primary-400 mr-1" />
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                Available in {selectedDistrict}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-neutral-800 dark:text-white">
              <span className="block text-primary-700 dark:text-primary-400 mb-2">Premium</span>
              Home Healthcare
              <span className="block mt-2">Services</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-neutral-600 dark:text-neutral-400 max-w-lg">
              Bringing professional medical care and support to the comfort of your home across Tamil Nadu since 2015.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="btn btn-primary"
              >
                Explore Services
              </a>
              
              <a
                href="https://wa.me/917502119022?text=Hello, I'm interested in hoMediCare services. Could you please provide more information?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
          
          {/* 3D Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[400px] lg:h-[500px] w-full"
          >
            <Canvas>
              <Scene />
            </Canvas>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-neutral-400 dark:border-neutral-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-primary-700 dark:bg-primary-400 rounded-full mt-2"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;