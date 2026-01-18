import React from "react";
import ImageCarousel from "../../components/ImageCarousel.jsx";
import img1 from "../../images/1.png";
import img2 from "../../images/2.png";
import img3 from "../../images/3.png";
import img4 from "../../images/4.png";
import img5 from "../../images/5.png";
import img6 from "../../images/6.png";
import img7 from "../../images/7.png";
import img8 from "../../images/8.png";
import img9 from "../../images/9.png";
import img10 from "../../images/10.png";
import ArrivalsOverview from "../../images/ArrivalsOverview.png";
import ArrivalsYearly from "../../images/ArrivalsYearly.png";
import StaysYearly from "../../images/StaysYearly.png";
import StaysOverview from "../../images/StaysOverview.png";
import equation from "../../images/equation.png";

export default function CausalContent() {
  const carouselImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];

  return (
    <main style={{ fontFamily: "Helvetica, Arial, sans-serif", padding: "24px", maxWidth: "1000px", margin: "0 auto" }}>
      <style>{`
        main p {
          text-align: justify;
          margin-bottom: 24px;
        }
        
        main h1 {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 24px;
        }
        
        main h2 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 32px;
          margin-bottom: 16px;
        }
        
        main h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 24px;
          margin-bottom: 12px;
        }
        
        main ul {
          margin-bottom: 24px;
          padding-left: 24px;
        }
        
        main li {
          margin-bottom: 8px;
        }
      `}</style>

      <h1>Energy Prices & Tourism Demand: Causal Exploration With TSLS Regression</h1>

      <h2>Project Overview</h2>
      <p>
        This project was completed as part of a causal impact analytics module at NUS, motivated by my interest in sustainability. A common concern with higher carbon and energy prices is their potential impact on economic productivity. Using available data, I focused on tourism outcomes, when exploring how increases in energy prices influence economic activity.
      </p>

      <p>
        This project uses a <b>two-stage least squares (TSLS)</b> approach to estimate the effect of energy 
        price changes on tourism outcomes in the European Union. Energy prices are derived from the <b>Harmonised Index of Consumer Prices (HICP): Energy</b> for the Euro Area (19 countries).
      </p>

      <p>
        This project uses an instrumental variable (IV) — <b>Carbon Policy Surprises</b> — 
        to isolate variation in <b>Energy Prices</b> that is not driven by tourism demand.
      </p>

      <p>
        Instrument identification is made possible by the establishment of the <b>EU Emissions Trading System (ETS)</b> in 2005, which creates exogenous variation in energy prices.  
        The chosen instrument is <b>Kanzig's carbon policy surprise series</b>, which measures changes in 
        carbon prices in response to regulatory news announcements related to emissions allowances from the 
        European Commission's Climate News Archive.
      </p>

      <ImageCarousel images={carouselImages} />

      <h2>Objective</h2>
      <p>
        Estimate the <b>causal</b> impact of energy price changes on tourism demand while addressing 
        endogeneity concerns.
      </p>

      <h2>Dependent Variable — Tourism Demand</h2>
      <p>
        The outcome variables are:
      </p>
      <ul>
        <li><b>Arrivals at tourist accommodation establishments (monthly)</b></li>
        <li><b>Nights spent at tourist accommodation establishments (monthly)</b></li>
      </ul>

      <p>
        The sample spans <b>January 2005 – December 2019</b>, aligning with Kanzig's series and excluding
        COVID-19 shocks. Twenty-six European countries were selected based on Eurostat completeness 
        following Garcia.
      </p>
      
      <div style={{ display: "flex", gap: "16px", margin: "24px 0" }}>
        <img
          src={ArrivalsOverview}
          alt="Arrivals Overview"
          style={{ width: "50%", height: "auto", borderRadius: "8px" }}
        />
        <img
          src={StaysOverview}
          alt="Stays Overview"
          style={{ width: "50%", height: "auto", borderRadius: "8px" }}
        />
      </div>

      <p>
        Country-specific characteristics influence tourism volume, requiring <b>fixed effects</b>.  
        Trends are highly seasonal — both domestic and foreign tourism peak during July and August — so 
        seasonality must also be controlled for.
      </p>

      <div style={{ display: "flex", gap: "16px", margin: "24px 0" }}>
        <img
          src={ArrivalsYearly}
          alt="Arrivals Yearly"
          style={{ width: "50%", height: "auto", borderRadius: "8px" }}
        />
        <img
          src={StaysYearly}
          alt="Stays Yearly"
          style={{ width: "50%", height: "auto", borderRadius: "8px" }}
        />
      </div>

      <h2>Is the Instrument Appropriate?</h2>

      <img src={img7} alt="Instrument diagram" style={{ width: "100%", height: "auto", borderRadius: "8px", margin: "24px 0" }} />
      
      <p>
        Kanzig's carbon policy surprise (CPS) series computes the change in carbon prices in a narrow time
        window around policy announcements to attribute price movements to regulatory updates. Surprise is
        defined as the change in EUA futures prices on the day of an event relative to the previous trading
        day, divided by electricity prices.
      </p>

      <p>
        Asset prices are taken from the European Union Allowances (EUA) futures market, where participants buy and sell allowances to emit carbon dioxide or other greenhouse gas equivalents. The CPS is defined as "the change in the EUA futures price on the day of the regulatory event compared to the last trading day before the event", divided by prevailing electricity prices.
      </p>

      <img src={img9} alt="Relevance analysis" style={{ width: "100%", height: "auto", borderRadius: "8px", margin: "24px 0" }} />
      
      <h3>1. Relevance</h3>
      <p>
        First-stage regression results show an F-statistic of <b>2.838</b> and a p-value of <b>0.0938</b>.  
        This meets significance at the 10% level but raises concerns about weak instruments.
      </p>

      <p>
        Conceptually, the link between EUA prices and energy prices is supported by the ECB's Economic 
        Bulletin: "emissions allowance prices are likely to have affected only HICP energy inflation – in 
        particular electricity prices," indicating that allowance-price changes pass through to consumers.
      </p>

      <img src={img10} alt="Exclusion restriction" style={{ width: "100%", height: "auto", borderRadius: "8px", margin: "24px 0" }} />
      
      <h3>2. Exclusion Restriction</h3>
      <p>
        Carbon policy surprises should influence tourism only indirectly through energy prices.  
        Higher energy costs (e.g., fuel, transport) may affect tourist behaviour, but CPS events themselves 
        should not correlate with country-specific tourism demand drivers.
      </p>

      <h2>Findings</h2>

      <img src={equation} alt="Regression equation" style={{ width: "100%", height: "auto", borderRadius: "8px", margin: "24px 0" }} />

      <div style={{ overflowX: "auto", margin: "24px 0" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontFamily: "Inter, sans-serif",
            fontSize: "0.9rem",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#e8f0fe", color: "#003366", fontWeight: 600 }}>
              <th style={{ padding: "12px", border: "1px solid #c9d6eb" }}>Independent Variable</th>
              <th style={{ padding: "12px", border: "1px solid #c9d6eb" }}>Arrivals (Foreign)</th>
              <th style={{ padding: "12px", border: "1px solid #c9d6eb" }}>Arrivals (Domestic)</th>
              <th style={{ padding: "12px", border: "1px solid #c9d6eb" }}>Arrivals (Total)</th>
              <th style={{ padding: "12px", border: "1px solid #c9d6eb" }}>Stays (Foreign)</th>
              <th style={{ padding: "12px", border: "1px solid #c9d6eb" }}>Stays (Domestic)</th>
              <th style={{ padding: "12px", border: "1px solid #c9d6eb" }}>Stays (Total)</th>
            </tr>
          </thead>

          <tbody>
            <tr style={{ backgroundColor: "#f7f9ff" }}>
              <td style={{ padding: "12px", border: "1px solid #c9d6eb", fontWeight: 600 }}>
                Harmonised Index of Consumer Prices for Energy (EU)
                <div style={{ fontSize: "0.8rem", color: "#555" }}>Instrumented using carbon policy surprise</div>
              </td>
              <td style={{ padding: "12px", border: "1px solid #c9d6eb" }}>
                -0.00457 <span style={{ color: "#003366" }}>(0.369)</span>
              </td>
              <td style={{ padding: "12px", border: "1px solid #c9d6eb" }}>
                -0.00313 <span style={{ color: "#003366" }}>(0.840)</span>
              </td>
              <td style={{ padding: "12px", border: "1px solid #c9d6eb" }}>
                -0.00351 <span style={{ color: "#003366" }}>(0.380)</span>
              </td>
              <td style={{ padding: "12px", border: "1px solid #c9d6eb" }}>
                -0.0117 <span style={{ color: "#003366" }}>(0.0538)</span>
              </td>
              <td style={{ padding: "12px", border: "1px solid #c9d6eb" }}>
                0.0151 <span style={{ color: "#003366" }}>(0.401)</span>
              </td>
              <td style={{ padding: "12px", border: "1px solid #c9d6eb" }}>
                -0.0111 <span style={{ color: "#003366" }}>(0.0256)</span>
              </td>
            </tr>

            <tr style={{ backgroundColor: "#ffffff" }}>
              <td style={{ padding: "12px", border: "1px solid #c9d6eb", fontWeight: 600 }}>
                USD Exchange Rate
                <div style={{ fontSize: "0.8rem", color: "#555" }}>National currency per USD (Euro area)</div>
              </td>
              <td style={{ padding: "12px", border: "1px solid #c9d6eb" }}>
                2.326 <span style={{ color: "#003366" }}>(&lt; 2e-16)</span>
              </td>
              <td style={{ padding: "12px", border: "1px solid #c9d6eb" }}>
                1.389 <span style={{ color: "#003366" }}>(0.00613)</span>
              </td>
              <td style={{ padding: "12px", border: "1px solid #c9d6eb" }}>
                1.981 <span style={{ color: "#003366" }}>(&lt; 2e-16)</span>
              </td>
              <td style={{ padding: "12px", border: "1px solid #c9d6eb" }}>
                2.258 <span style={{ color: "#003366" }}>(&lt; 2e-16)</span>
              </td>
              <td style={{ padding: "12px", border: "1px solid #c9d6eb" }}>
                1.785 <span style={{ color: "#003366" }}>(0.002455)</span>
              </td>
              <td style={{ padding: "12px", border: "1px solid #c9d6eb" }}>
                1.961 <span style={{ color: "#003366" }}>(&lt; 2e-16)</span>
              </td>
            </tr>

            <tr style={{ backgroundColor: "#f7f9ff" }}>
              <td style={{ padding: "12px", border: "1px solid #c9d6eb", fontWeight: 600 }}>
                Seasonal Peak (July/August = 1)
              </td>
              <td style={{ padding: "12px", border: "1px solid #c9d6eb" }}>
                0.806 <span style={{ color: "#003366" }}>(&lt; 2e-16)</span>
              </td>
              <td style={{ padding: "12px", border: "1px solid #c9d6eb" }}>
                0.599 <span style={{ color: "#003366" }}>(&lt; 2e-16)</span>
              </td>
              <td style={{ padding: "12px", border: "1px solid #c9d6eb" }}>
                0.714 <span style={{ color: "#003366" }}>(&lt; 2e-16)</span>
              </td>
              <td style={{ padding: "12px", border: "1px solid #c9d6eb" }}>
                0.967 <span style={{ color: "#003366" }}>(&lt; 2e-16)</span>
              </td>
              <td style={{ padding: "12px", border: "1px solid #c9d6eb" }}>
                0.900 <span style={{ color: "#003366" }}>(&lt; 2e-16)</span>
              </td>
              <td style={{ padding: "12px", border: "1px solid #c9d6eb" }}>
                0.973 <span style={{ color: "#003366" }}>(&lt; 2e-16)</span>
              </td>
            </tr>
          </tbody>
        </table>

        <div style={{ fontSize: "0.8rem", color: "#555", marginTop: "12px" }}>
          * Table reports coefficients with p-values in parentheses.  
          Carbon policy surprise is used as an instrument for the HICP Energy Index.
        </div>
      </div>

      <h2>Interpretation</h2>

      <p>
        The Wu Hausman (Weak Instruments) test suggests that the Carbon Policy Surprise is a valid instrument for the
        foreign and domestic arrivals models and the domestic stays model. However, with the inclusion of controls, the
        magnitude of HICP coefficients decrease significantly for all estimates, pointing to issues with
        the robustness of the instrument.
      </p>

      <h3>Arrivals</h3>
      <p>
        Generally, all regression results for arrivals data are statistically insignificant. Foreign arrivals decline
        by 0.457% and total arrivals by 0.351% following a one-unit increase in the instrumented HICP Energy
        index, but these estimates lack statistical significance.
      </p>
      
      <h3>Stays</h3>
      <p>
        In contrast, the stays (nights spent) models show stronger
        effects: foreign stays decrease by 1.17% and total stays by 1.11%, both of
        which are significant at conventional levels.
      </p>

      <h3>Domestic Stays and Arrivals</h3>
      <p>
        Domestic models present a different pattern. The Wu–Hausman test indicates that HICP Energy is not
        endogenous for domestic arrivals or stays, implying that the instrument is unnecessary for these
        specifications. The weaker relationship may reflect shorter domestic data availability (starting in
        2011) and the delayed integration of aviation into the EU ETS in 2012. Domestic tourists may also be
        driven by different economic and behavioural factors—such as substitution towards local travel or
        budget constraints—which may explain why higher energy prices are associated with a positive effect on
        domestic stays.
      </p>

      <h2>Overall Conclusions</h2>
      <p>
        At both national and aggregate levels, energy consumer prices have a <b>limited causal effect</b> on 
        tourist arrivals and nights spent in the EU. Across models, coefficients are generally insignificant 
        or borderline in magnitude.
      </p>

      <p>
        The economic consequences of energy price inflation — when driven by green initiatives like the EU ETS — 
        appear <b>negligible</b> for tourism demand. Other factors, such as exchange rates, exert a stronger 
        influence on tourism flows.
      </p>

      <div
        style={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          backgroundColor: "white",
          padding: "8px 16px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <a
          href="https://github.com/tali-a/causal-impact-energy-prices-on-tourism-demand"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "#1D4ED8",
            fontWeight: 500,
            textDecoration: "none",
            fontSize: "0.95rem",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.774.418-1.304.762-1.604-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.467-2.381 1.235-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.513 11.513 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.243 2.874.12 3.176.77.841 1.233 1.912 1.233 3.222 0 4.61-2.804 5.624-5.476 5.921.43.372.813 1.102.813 2.222 0 1.604-.015 2.896-.015 3.286 0 .319.218.694.825.576C20.565 21.796 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          View on GitHub
        </a>
      </div>
    </main>
  );
}