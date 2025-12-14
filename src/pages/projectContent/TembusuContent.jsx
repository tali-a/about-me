import React from "react";
import design3 from "../../images/design3.jpg";
import concert from "../../images/concert.jpg";
import ig1 from "../../images/ig1.jpg";
import tele1 from "../../images/tele1.png";
import tele2 from "../../images/tele2.png";

export default function TembusuContent() {
  return (
    <main style={{ fontFamily: "Helvetica, Arial, sans-serif", padding: "24px", maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "16px" }}>Tembusu Arts Council — Publicity & Event Coordination</h1>

      <p style={{ marginBottom: "24px" }}>
        During my time at <strong>Tembusu Arts Council</strong>, I contributed to publicity and outreach to drive student engagement for Tembusu Arts Week events, including workshops, speaker sessions, Maker’s Market, and the finale concert. I also ideated content, designed merchandise, produced videos and posts, coordinated event logistics including vendor sourcing, and managed a Maker’s Market booth.
      </p>

      <p style={{ marginBottom: "24px" }}>
        Each Arts Week is organised around a central theme — which inspires decorations around the residential college lift lobby. Speaker’s teas, workshops, and the Maker’s Market lead up to the final event: the Finale Concert.
      </p>

      <div style={{ margin: "24px 0" }}>
        <img src={concert} alt="Arts Week Finale Concert" style={{ width: "100%", borderRadius: "8px" }} />
      </div>

      <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px" }}>My Favourite Arts Week Theme</h2>
      <p style={{ marginBottom: "24px" }}>
        <strong>Do-It Yourself</strong>. Related concepts: instruction manuals, childhood games.
        On the publicity / engagement side of things - we had interactive merch, which also helped boost attendance and interest!
      </p>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", margin: "24px 0" }}>
        <img src={tele1}  style={{ width: "320px", borderRadius: "8px", flex: "1 1 300px" }} />
        <img src={ig1}  style={{ width: "300px", borderRadius: "8px", flex: "1 1 300px" }} />
        <img src={tele2}  style={{ width: "300px", borderRadius: "8px", flex: "1 1 300px" }} />
      </div>

    </main>
  );
}