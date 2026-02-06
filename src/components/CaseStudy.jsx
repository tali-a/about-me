import React, { useState, useEffect, useRef } from "react";

/**
 * Reusable Case Study Component
 * 
 * Props:
 * - title: string - Main title of the case study
 * - subtitle: string (optional) - Subtitle/tagline
 * - context: string (optional) - Additional context
 * - problem: { title: string, description: string } - Problem section
 * - solution: { title: string, description: string } - Solution section
 * - slides: array of { image: string, alt: string } - Presentation slides
 */
export default function CaseStudy({ 
  title, 
  subtitle, 
  context,
  problem, 
  solution, 
  slides = [] 
}) {
  const [expandedSection, setExpandedSection] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (slidesContainerRef.current) {
        const container = slidesContainerRef.current;
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const containerTop = container.offsetTop;
        const containerHeight = container.offsetHeight;
        
        // Calculate which slide should be visible based on scroll
        const scrollInContainer = scrollPosition - containerTop + windowHeight / 2;
        const slideIndex = Math.floor((scrollInContainer / containerHeight) * slides.length);
        const clampedIndex = Math.max(0, Math.min(slides.length - 1, slideIndex));
        
        setCurrentSlide(clampedIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slides.length]);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div style={{
      fontFamily: 'Helvetica, Arial, sans-serif',
      minHeight: '100vh',
      backgroundColor: '#ffffff'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        maxWidth: '1400px',
        margin: '0 auto',
        minHeight: '100vh'
      }}>
        {/* Left Column - Content */}
        <div style={{
          padding: '4rem 3rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          position: 'sticky',
          top: 0,
          height: 'fit-content',
          maxHeight: '100vh',
          overflowY: 'auto'
        }}>
          {/* Header */}
          <div>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: '700',
              lineHeight: '1.05',
              marginBottom: '0.75rem',
              color: '#000000',
              letterSpacing: '-0.02em'
            }}>
              {title}
            </h1>
            {subtitle && (
              <p style={{
                fontSize: '1.25rem',
                color: '#666666',
                lineHeight: '1.4',
                marginBottom: '0.5rem',
                letterSpacing: '-0.01em'
              }}>
                {subtitle}
              </p>
            )}
            {context && (
              <p style={{
                fontSize: '0.9rem',
                color: '#666666',
                lineHeight: '1.4',
                marginBottom: '1rem'
              }}>
                {context}
              </p>
            )}
            
            {/* Slide Progress Indicator */}
            <div style={{
              marginTop: '0.5rem'
            }}>
              <p style={{
                fontSize: '0.85rem',
                color: '#666666',
                marginBottom: '0.5rem',
                lineHeight: '1.4'
              }}>
                Slide {currentSlide + 1} of {slides.length}
              </p>
              <div style={{
                height: '2px',
                backgroundColor: '#e5e5e5',
                borderRadius: '1px',
                overflow: 'hidden'
              }}>
                <div style={{
                  height: '100%',
                  backgroundColor: '#000000',
                  width: `${((currentSlide + 1) / slides.length) * 100}%`,
                  transition: 'width 0.3s ease'
                }} />
              </div>
            </div>
          </div>

          {/* Problem Section */}
          <ExpandableSection
            title={problem.title}
            isExpanded={expandedSection === 'problem'}
            onToggle={() => toggleSection('problem')}
          >
            <p style={{
              fontSize: '0.9rem',
              lineHeight: '1.5',
              color: '#000000',
              letterSpacing: '-0.01em',
              whiteSpace: 'pre-line'
            }}>
              {problem.description}
            </p>
          </ExpandableSection>

          {/* Solution Section */}
          <ExpandableSection
            title={solution.title}
            isExpanded={expandedSection === 'solution'}
            onToggle={() => toggleSection('solution')}
          >
            <p style={{
              fontSize: '0.9rem',
              lineHeight: '1.5',
              color: '#000000',
              letterSpacing: '-0.01em',
              whiteSpace: 'pre-line'
            }}>
              {solution.description}
            </p>
          </ExpandableSection>
        </div>

        {/* Right Column - Slides */}
        <div 
          ref={slidesContainerRef}
          style={{
            backgroundColor: '#ffffff',
            minHeight: `${slides.length * 100}vh`,
            position: 'relative'
          }}
        >
          <div style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem'
          }}>
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.image}
                alt={slide.alt}
                style={{
                  position: 'absolute',
                  maxWidth: '90%',
                  maxHeight: '90%',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  opacity: currentSlide === index ? 1 : 0,
                  transition: 'opacity 0.5s ease',
                  pointerEvents: currentSlide === index ? 'auto' : 'none',
                  boxShadow: currentSlide === index ? '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06)' : 'none',
                  borderRadius: '8px',
                  backgroundColor: '#ffffff'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Expandable Section Component
function ExpandableSection({ title, isExpanded, onToggle, children }) {
  return (
    <div style={{
      borderBottom: '1px solid #e5e5e5',
      paddingBottom: '1.5rem'
    }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          fontFamily: 'Helvetica, Arial, sans-serif',
          textAlign: 'left'
        }}
      >
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          color: '#000000',
          margin: 0,
          letterSpacing: '-0.01em',
          lineHeight: '1.2'
        }}>
          {title}
        </h2>
        <span style={{
          fontSize: '1.5rem',
          color: '#666666',
          transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease',
          display: 'inline-block',
          width: '24px',
          height: '24px',
          lineHeight: '24px',
          textAlign: 'center'
        }}>
          +
        </span>
      </button>
      
      <div style={{
        maxHeight: isExpanded ? '500px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s ease',
        paddingTop: isExpanded ? '1rem' : '0'
      }}>
        {children}
      </div>
    </div>
  );
}
