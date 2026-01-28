import React from "react";

export default function ShopeeSPPContent() {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem'
  };

  const headerStyle = {
    marginBottom: '2rem'
  };

  const mainTitleStyle = {
    fontSize: '2rem',
    marginBottom: '0.5rem',
    fontWeight: '600'
  };

  const subtitleStyle = {
    fontSize: '1.2rem',
    fontStyle: 'italic',
    color: '#666',
    marginBottom: '0.5rem'
  };

  const contextStyle = {
    fontSize: '0.9rem',
    color: '#666'
  };

  const twoColumnStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
    marginBottom: '3rem'
  };

  const leftColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  };

  const rightColumnStyle = {
    fontSize: '0.95rem',
    lineHeight: '1.6'
  };

  const sectionTitleStyle = {
    fontSize: '1.3rem',
    fontWeight: '600',
    marginBottom: '1rem'
  };

  const numberedItemStyle = {
    marginBottom: '1rem'
  };

  const numberBadgeStyle = (num) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#0066cc',
    color: 'white',
    fontSize: '0.85rem',
    fontWeight: '600',
    marginRight: '0.5rem'
  });

  const itemTitleStyle = {
    fontWeight: '600',
    display: 'inline'
  };

  const checkmarkStyle = {
    color: '#22c55e',
    marginRight: '0.5rem',
    fontSize: '1.2rem'
  };

  const impactStyle = {
    marginTop: '1.5rem',
    padding: '1rem',
    backgroundColor: '#f0fdf4',
    borderLeft: '4px solid #22c55e',
    borderRadius: '4px'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={mainTitleStyle}>Increasing adoption of Shopee Pickup Points (SPPs).</h1>
        <p style={contextStyle}>
          This case study was completed under <a href="https://www.talentgeist.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc', textDecoration: 'none' }}>TalentGeist WSP</a>
        </p>
      </div>

      <div style={twoColumnStyle}>
        <div style={leftColumnStyle}>
          <iframe
            src={`${import.meta.env.BASE_URL}pdfs/shopee-case-study.pdf`}
            width="100%"
            height="1000px"
            title="Shopee SPP Case Study PDF"
            style={{ border: '1px solid #ddd', borderRadius: '8px' }}
          />
        </div>

        <div style={rightColumnStyle}>
          <h3 style={sectionTitleStyle}>Synopsis</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            We aimed to increase usage of Shopee Pickup Points. Shopee's self-collection (SPP) 
            model faces three interconnected barriers:
          </p>

          <div style={numberedItemStyle}>
            <span style={numberBadgeStyle(1)}>1</span>
            <span style={itemTitleStyle}>Pricing perception misalignment:</span> Consumers currently 
            think self-collection is too expensive and fail to recognise benefits.
          </div>

          <div style={numberedItemStyle}>
            <span style={numberBadgeStyle(2)}>2</span>
            <span style={itemTitleStyle}>Operational capacity constraints:</span> users disproportionately 
            prefer shop and locker SPP modes.
          </div>

          <div style={numberedItemStyle}>
            <span style={numberBadgeStyle(3)}>3</span>
            <span style={itemTitleStyle}>Service experience gaps at residential points:</span> residential 
            collection points are viewed as unreliable and thus undesirable.
          </div>

          <p style={{ margin: '1.5rem 0 1rem 0' }}>
            Shopee should put these steps into action:
          </p>

          <div style={numberedItemStyle}>
            <span style={checkmarkStyle}>✓</span>
            <span style={itemTitleStyle}>Reposition SPPs through clear ROI messaging,</span> ensuring 
            that more than 70% of its Singapore user base understands tangible benefits such as free 
            or lower shipping and fewer failed deliveries.
          </div>

          <div style={numberedItemStyle}>
            <span style={checkmarkStyle}>✓</span>
            <span style={itemTitleStyle}>Introduce an in-app SPP rating system,</span> allowing users to 
            rate and review collection points; this builds trust, and enables low-performing locations 
            to be phased out.
          </div>

          <div style={numberedItemStyle}>
            <span style={checkmarkStyle}>✓</span>
            <span style={itemTitleStyle}>Selectively increase capacity at both residential and non-residential points,</span> with 
            investment skewed toward non-residential venues if negative perceptions of residential 
            locations persist.
          </div>

          <div style={impactStyle}>
            <span style={{ fontSize: '1.1rem', marginRight: '0.5rem' }}>📈</span>
            <strong>Projected Impact:</strong> Anticipated <strong style={{ color: '#22c55e' }}>35% lift in selection of 
            'Pickup Point' at eligible checkout.</strong>
          </div>
        </div>
      </div>
    </div>
  );
}