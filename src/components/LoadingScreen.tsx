import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface LoadingScreenProps {
  onFinish: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  const controls = useAnimation();
  const barControls = useAnimation();

  useEffect(() => {
    async function sequence() {
      // Fill bar
      await barControls.start({ scaleX: 1 }, { duration: 1.2, ease: 'easeInOut' });
      // Expand bar to fill screen and fade out
      await controls.start({
        scaleX: 20,
        scaleY: 20,
        opacity: 0,
        transition: { duration: 0.8 },
      });
      onFinish();
    }
    sequence();
  }, [controls, barControls, onFinish]);

  return (
    <motion.div
      initial={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        width: '60vw',
        height: 80,
        x: '-50%',
        y: '-50%',
        borderRadius: 60,
        zIndex: 50,
        opacity: 1,
        boxShadow: '0 0 0 9999px #181818',
        scaleX: 1,
        scaleY: 1,
        background: 'transparent',
      }}
      animate={controls}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        fontFamily: 'Host Grotesk, sans-serif',
      }}
    >
      {/* Animated bar background */}      <motion.div
        initial={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          background: '#F6F4EA',
          borderRadius: 60,
          scaleX: 0,
        }}
        animate={barControls}
        style={{
          zIndex: 1,
          transformOrigin: 'left',
        }}
      />
      {/* Text stays above the bar */}
      <span
        className="text-2xl md:text-4xl font-semibold text-black tracking-wide select-none"
        style={{
          fontFamily: 'Host Grotesk, sans-serif',
          zIndex: 2,
          position: 'relative',
        }}
      >
        Mysore Union
      </span>
    </motion.div>
  );
};

export default LoadingScreen;
// Import Host Grotesk font globally in your CSS or _document.tsx 