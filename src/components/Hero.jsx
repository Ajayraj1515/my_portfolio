import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react'; // Make sure 'lucide-react' is installed

const Hero = () => {
  // State for "Passionate Software Developer" typing
  const [typedSubtitle, setTypedSubtitle] = useState('');
  const fullSubtitleText = "Passionate Software Developer";

  // State for "Ajayraj" typing
  const [typedAjayraj, setTypedAjayraj] = useState('');
  const fullAjayrajText = "Ajayraj"; // Just "Ajayraj" for the typing effect

  useEffect(() => {
    let ajayrajIndex = 0;
    const ajayrajTimer = setInterval(() => {
      if (ajayrajIndex <= fullAjayrajText.length) {
        setTypedAjayraj(fullAjayrajText.slice(0, ajayrajIndex));
        ajayrajIndex++;
      } else {
        clearInterval(ajayrajTimer);
        // Once Ajayraj is typed, start typing the subtitle
        let subtitleIndex = 0;
        const subtitleTimer = setInterval(() => {
          if (subtitleIndex <= fullSubtitleText.length) {
            setTypedSubtitle(fullSubtitleText.slice(0, subtitleIndex));
            subtitleIndex++;
          } else {
            clearInterval(subtitleTimer);
          }
        }, 100); // Speed for subtitle typing
      }
    }, 100); // Speed for Ajayraj typing

    return () => {
      clearInterval(ajayrajTimer);
      // Clean up subtitle timer if it was started
      // Note: This relies on JavaScript's closure, the subtitleTimer variable
      // will be defined in the scope of the outer effect.
    };
  }, []); // Run only once on mount

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
            
            {/* Updated Name Structure for typing "Ajayraj" */}
            <h1 className="hero-full-name">
              <span className="hero-name-gradient hero-dhamoji">Dhamoji</span>
              <span className="hero-typed-name">
                {typedAjayraj}
                <span className="typing-cursor">|</span> {/* Cursor for Ajayraj */}
              </span>
              <span className="hero-kattina-static">Kattina</span> {/* Static "Kattina" */}
            </h1>
            
            {/* The typing animation for "Passionate Software Developer" */}
            <div className="hero-typing">
              <p className="hero-subtitle">
                {typedSubtitle} {/* Now using typedSubtitle for this text */}
                <span className="typing-cursor">|</span> {/* Cursor for subtitle */}
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