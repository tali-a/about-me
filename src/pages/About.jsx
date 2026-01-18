import React from 'react';

export default function About() {
  return (
    <main style={{ fontFamily: "Helvetica, Arial, sans-serif", padding: "24px", maxWidth: "1000px", margin: "0 auto" }}>
      <style>{`
        main p {
          text-align: justify;
        }
      `}</style>
      <style>{`
        .link-red {
          color: inherit;
          text-decoration: none;
          border-bottom: 3px solid #dc2626;
          transition: all 0.3s ease;
        }
        .link-red:hover {
          color: #dc2626;
          border-bottom-width: 6px;
          transform: translateY(-1px);
          display: inline-block;
        }
        
        .link-blue {
          color: inherit;
          text-decoration: none;
          border-bottom: 3px solid #2563eb;
          transition: all 0.3s ease;
        }
        .link-blue:hover {
          color: #2563eb;
          border-bottom-width: 6px;
          transform: translateY(-1px);
          display: inline-block;
        }
        
        .link-green {
          color: inherit;
          text-decoration: none;
          border-bottom: 3px solid #16a34a;
          transition: all 0.3s ease;
        }
        .link-green:hover {
          color: #16a34a;
          border-bottom-width: 6px;
          transform: translateY(-1px);
          display: inline-block;
        }
        
        .link-purple {
          color: inherit;
          text-decoration: none;
          border-bottom: 3px solid #7c3aed;
          transition: all 0.3s ease;
        }
        .link-purple:hover {
          color: #7c3aed;
          border-bottom-width: 6px;
          transform: translateY(-1px);
          display: inline-block;
        }
      `}</style>
      
      <p style={{ marginBottom: "24px" }}>
        I'm Talia, a Business Analytics undergraduate at the National University of Singapore, graduating in August 2026, with a strong interest in translating data into clear, actionable insights. I have hands-on experience building analytical dashboards and introducing automation into work processes across manufacturing, financial services, and government.
      </p>
      
      <p style={{ marginBottom: "24px" }}>
        My journey into analytics began with a curiosity about how automation can improve everyday workflows. At OCBC, I wrote Python automation scripts to improve the accuracy and efficiency of risk surveillance processes, which showed me how well-designed analytical interventions can meaningfully strengthen governance and operations.
      </p>
      
      <p style={{ marginBottom: "24px" }}>
        Alongside analytics, I have a strong interest in media and design, which has shaped how I approach data storytelling. At the Intellectual Property Office of Singapore, I designed an <a href="https://public.tableau.com/app/profile/ipos/viz/GII2024LandingPage/LandingPage" target="_blank" rel="noopener noreferrer" className="link-red">exploratory Tableau dashboard</a> presenting insights from Singapore's performance in the <a href="https://www.wipo.int/en/web/global-innovation-index" target="_blank" rel="noopener noreferrer" className="link-blue">Global Innovation Index</a>, reinforcing my belief that effective analytics should be intuitive, accessible, and meaningful to its users.
      </p>
      
      <p style={{ marginBottom: "24px" }}>
        I pursued my interest in sustainability at the Centre for Liveable Cities, conducting policy research and future sensing on <a href="https://knowledgehub.clc.gov.sg/publications-library/creating-liveable-cities-a-cross-domain-approach-to-sustainable-mobility/" target="_blank" rel="noopener noreferrer" className="link-green">mobility interventions</a>.
      </p>
      
      <p style={{ marginBottom: "24px" }}>
        Curious about how technology drives sustainability and efficiency at scale, I later worked as a Strategy Intern at <a href="https://www.siemens.com/sg/en/company/about/businesses/digital-industries.html" target="_blank" rel="noopener noreferrer" className="link-green">Siemens</a>, supporting commercial decision-making through Power BI dashboards, CRM dashboard design, and data validation. This experience grounded my analytical work in commercial realities and immersed me in the practical applications of digitalisation and AI in manufacturing.
      </p>
      
      <p style={{ marginBottom: "24px" }}>
        I'm currently at Synapxe, supporting the implementation of <a href="https://www.synapxe.sg/healthtech/health-ai/ai-medical-imaging-platform" target="_blank" rel="noopener noreferrer" className="link-purple">AimSG</a>, an AI medical imaging platform deployed across public hospitals. Through this role, I'm gaining exposure to MLOps concepts and the operationalisation of AI in a regulated healthcare environment!
      </p>
      
      <p style={{ marginBottom: "24px" }}>
        I am seeking analytics, strategy, or product-related roles.
      </p>
    </main>
  );
}

