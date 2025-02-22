import React from "react";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import Navbar from "./Navbar.jsx";
import BackgroundParticles from "./Backgroundparticles.jsx";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="relative h-screen overflow-hidden bg-gray-900">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <BackgroundParticles 
          particleColors={["#3b82f6", "#6366f1"]}
          particleCount={100}
          particleBaseSize={2}
          alphaParticles={true}
        />
      </div>

      {/* Content Layer */}
      <div className="relative flex h-full z-10">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto">
            <div className="container mx-auto px-6 py-8 text-gray-100">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Outlet />
                </motion.div>
              </AnimatePresence>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;