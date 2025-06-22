import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react'; // Make sure 'lucide-react' is installed

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Passionate Software Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        // Optional: Reset or loop the typing animation
        // For now, it stops after typing once
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            
            {/* Updated Name Structure */}
            <h1 className="hero-full-name">
              <span className="hero-name-gradient hero-dhamoji">Dhamoji</span>
              {/* Added a new class for Ajayraj Kattina for distinct styling */}
              <span className="hero-ajayraj-kattina">Ajayraj Kattina</span>
            </h1>
            
            {/* The typing animation for "Passionate Software Developer" */}
            <div className="hero-typing">
              <p className="hero-subtitle">
                {typedText}
                <span className="typing-cursor">|</span>
              </p>
            </div>

            {/* Hero Contact Info */}
            <div className="hero-contact">
              <p className="contact-item">
                📍 Nellore, Andhra Pradesh, 524344
              </p>
              <p className="contact-item">
                📞 +91 9121429127
              </p>
              <p className="contact-item">
                📧 ajayraj3461@gmail.com
              </p>
            </div>

            {/* Hero Buttons */}
            <div className="hero-buttons">
              <a
                href="#projects"
                className="hero-button"
              >
                View My Work
              </a>
              <a
                href="#chat"
                className="hero-button hero-button-secondary"
              >
                Let's Chat
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-image">
            <div className="image-container">
              <div className="image-rings"></div>
              <div className="image-rings"></div>
              
              <div className="profile-image">
                <img
                  src="https://ik.imagekit.io/4cstjse7i/WhatsApp%20Image%202025-06-22%20at%2011.46.03_af8cc0b4.jpg?updatedAt=1750583213351"
                  alt="Dhamoji Ajayraj Kattina"
                />
                
                <div className="profile-overlay"></div>
              </div>

              <div className="tech-badge">
                JS
              </div>
              <div className="tech-badge">
                ⚛️
              </div>
              <div className="tech-badge">
                💻
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <ArrowDown size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;