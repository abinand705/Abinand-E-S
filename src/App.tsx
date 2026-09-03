/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { ParallaxBackground } from './components/ParallaxBackground';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollElevator } from './components/ScrollElevator';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ServicesSection } from './components/ServicesSection';
import { TimelineSection } from './components/TimelineSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [cursorEnabled, setCursorEnabled] = useState(true);

  useEffect(() => {
    // Prevent browser from restoring previous scroll position on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-transparent text-slate-900 overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-950 font-sans">
      {/* Interactive Fluid Mouse Cursor */}
      <CustomCursor enabled={cursorEnabled} />

      {/* Nature Landscape Parallax Multi-Layer Engine & Canvas */}
      <ParallaxBackground />

      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Side Scroll Elevator Navigation */}
      <ScrollElevator />

      {/* Top Navigation */}
      <Navbar
        cursorEnabled={cursorEnabled}
        setCursorEnabled={setCursorEnabled}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Hero Section with Parallax & Terminal */}
        <HeroSection />

        {/* About & Philosophy */}
        <AboutSection />

        {/* Technical Capabilities & Stack Matrix */}
        <SkillsSection />

        {/* Featured Projects & Interactive Inspection */}
        <ProjectsSection />

        {/* Professional Experience */}
        <ExperienceSection />

        {/* Academic & Educational Milestones */}
        <TimelineSection />

        {/* Specialized Services */}
        <ServicesSection />

        {/* Contact & Direct Channels */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
