import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const articles = [
  { title: "Insights on Analytics", url: "https://advisory.sg/2022/10/09/insights-on-analytics-insights/" },
  { title: "Conversations with Rydwan Anwar", url: "https://advisory.sg/2022/10/16/conversations-with-rydwan-anwar/" },
  { title: "Conversations with Ryan Wong", url: "https://advisory.sg/2025/01/30/conversations-with-ryan-wong/" },
  { title: "Insights on Entrepreneurship", url: "https://advisory.sg/2025/01/06/insights-on-entrepreneurship-2/" },
  { title: "Insights on Foodpanda", url: "https://advisory.sg/2024/02/13/insights-on-foodpanda/" },
  { title: "Insights on MedTech", url: "https://advisory.sg/2022/04/22/insights-on-medtech/" },
];

export default function AdvisoryContent() {
  return (
    <main style={{ fontFamily: "Helvetica, Arial, sans-serif", padding: "24px", maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "16px" }}>Advisory — Content Management Work</h1>
      <p style={{ marginBottom: "32px" }}>
        During my time volunteering at <strong>Advisory</strong>, I collaborated with contributors and the editorial team to turn career conversations into readable, audience-focused stories. I conducted interviews, wrote feature articles, and edited content for clarity and flow.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
        {articles.map(article => (
          <div key={article.url} style={{
            background: "#ffffff",
            border: "1px solid #e0daca",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "2px 4px 12px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "140px",
            transform: "rotate(-0.2deg)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "rotate(0deg)"; e.currentTarget.style.boxShadow = "4px 8px 16px rgba(0,0,0,0.12)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "rotate(-0.2deg)"; e.currentTarget.style.boxShadow = "2px 4px 12px rgba(0,0,0,0.08)"; }}
          >
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "12px", textAlign: "center" }}>{article.title}</h3>
            <a 
              href={article.url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                marginTop: "auto",
                textDecoration: "none",
                backgroundColor: "#000",
                color: "#fff",
                padding: "6px 12px",
                borderRadius: "4px",
                textAlign: "center",
                fontWeight: "500",
                fontSize: "0.875rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                transition: "background-color 0.3s"
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "#333"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = "#000"}
            >
              View Article <ArrowForwardIcon style={{ fontSize: "1rem" }} />
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}