import React, { useEffect, useState } from 'react';
import FloatingNav from '../components/FloatingNav';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import WhatICanDo from '../components/WhatICanDo';
import FutureGoals from '../components/FutureGoals';
import LearningTimeline from '../components/LearningTimeline';
import LeetCodeSection from '../components/LeetCodeSection';
import ChatWithMe from '../components/ChatWithMe';
import Hero from '../components/Hero';
import LoadingScreen from '../components/LoadingScreen';
import '../styles/main.css';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen">
      <FloatingNav />

      <main className="relative main-content-shifted">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <WhatICanDo />
        <FutureGoals />
        <LearningTimeline />
        <LeetCodeSection />
        <ChatWithMe />
      </main>

      {/* Optional Background Effects */}
      <div className="background-elements">
        <div className="bg-element"></div>
        <div className="bg-element"></div>
        <div className="bg-element"></div>
      </div>
    </div>
  );
};

export default Index;
