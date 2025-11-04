import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Globe, Leaf, ShieldCheck } from 'lucide-react';

const Hero3D = () => {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-neutral-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/M2rj0DQ6tP7dSzSz/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability without blocking 3D interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md"
        >
          <Globe className="h-4 w-4 text-emerald-300" />
          <span className="text-sm text-emerald-200">Global B2B Palm Oil Supply • RSPO-Focused</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
        >
          Premium Crude Palm Oil & Derivatives
          <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
            Sustainable • Competitive • Reliable
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="mt-4 max-w-3xl text-balance text-sm text-neutral-200 sm:text-base"
        >
          Serving food, cosmetics, and biofuel industries worldwide with export-grade CPO, RBD Palm Oil, PFAD, and Palm Kernel Oil. Origin: Indonesia & Malaysia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-2 rounded-md bg-amber-400 px-5 py-3 font-medium text-black transition-transform hover:scale-[1.02] hover:bg-amber-300"
          >
            View Products
          </a>
          <a
            href="#sustainability"
            className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
          >
            <Leaf className="h-4 w-4 text-emerald-300" /> Sustainability
          </a>
          <a
            href="#logistics"
            className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
          >
            <ShieldCheck className="h-4 w-4 text-emerald-300" /> Reliable Supply
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;
