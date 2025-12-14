import React from "react";
import legend from "../../images/legend.png";

export default function IPOSContent() {
  return (
    <div className="project-intro">
      <h1>Singapore's Innovation Journey</h1>
      <p>At my time at the Intellectual Property Office of Singapore, I learnt how to create effective visualisations from complex datasets. 
        I gained a better understanding of how innovation can be quantified.
        Lastly, I appreciated Singapore’s commitment to innovation over the years. </p>

      <p> Global Innovation Index data (publicly available), was the main reference for the dashboard. The Global Innovation Index (GII) 
        is an annual report and ranking by WIPO (World Intellectual Property Organization)
        that ranks economies on their innovation capabilities. Indicators like R&D, education, infrastructure are
        grouped into inputs and outputs to assess innovation ecosystems. </p>
      
      <img src={legend} />
<h2>Tab 1: The Global Relationship between Economic Growth and Innovation</h2>
      <p>
The first tab highlights the <b>positive relationship between economic development and innovation performance</b>. High performers consistently show strong economic outcomes.The dashboard centres on two main elements: the GDP per capita trend over time for all economies, and the innovation-pillar performance rankings for each year within each country. Actions and filters link both graphs.
</p>

      <p> 
        In early iterations, showing all countries at once was overwhelming. The solution was to introduce <b>straightforward continent and ASEAN groupings, with ASEAN as the default view</b> - users should be able to see Singapore's relative performance at first glance.
        For exploratory dashboards, it’s important to make the key takeaway explicit and offer clear guidance on how users should continue interacting with the visualisations.</p>
              <p>Through this process, I learned how to approach simplifying datasets. Firstly: What are you generally trying to convey? Secondly: What is the core insight the user should see first? </p>
      <p></p>
      <div style={{ width: "100%", height: "900px" }}>
  <iframe
    src="https://public.tableau.com/views/GII2024OurInnovationandEconomicProgress/Tab1?:embed=y&:display_count=yes&:showVizHome=no"
    width="100%"
    height="100%"
    style={{ border: "none" }}
  ></iframe>
</div>

<p></p>
<h2>Tab 2: Singapore's Strengths and Weaknesses</h2>

<p>
  The second tab tells the story of Singapore’s development as an <b>innovation hotspot</b> using insights from the GII’s input and output pillars. 
  What each <b>pillar</b> and <b>subpillar</b> represents is explained — for example, <b>Institutions</b> assesses how an economy attracts business and fosters growth by providing good governance, along with the appropriate levels of protection and incentives.
</p>

<p>
  The page is structured into <b>(1) Introduction to Concept</b>, <b>(2) Pillar Scores and Ranks</b>, and <b>(3) Indicator Performance</b>, and can be filtered by pillar.
</p>

<p>
  A common problem in data analysis is dealing with <b>missing values</b>. In this visualisation-heavy context, it was important to correctly identify and distinguish between different types of missing values. 
  Small dots with no scores indicated <b>missing indicators specific to Singapore</b>, while empty circles signified <b>indicators newly introduced</b> in the GII framework over the years.
</p>

<iframe
  src="https://public.tableau.com/views/GII2024OurStrengthsandWeaknesses/Tab2?:showVizHome=no&:embed=true"
  width="100%"
  height="900px"
  style={{ border: "none" }}
/>

<h2>Tab 3: How Stakeholders have Influenced Singapore's Innovation Landscape</h2>

<p>
  The third tab references the <b>innovation indicators</b> and tags each one to the <b>main or likely stakeholder</b> responsible, 
  providing another perspective on how <b>key decision-makers</b> are involved in shaping Singapore’s innovation ecosystem. 
</p>

<p>
  The page’s main focus is a <b>radial bubble chart</b> visualising Singapore’s performance in the 2024 Global Innovation Index. 
  Supplementary charts are included to show the indicator’s <b>rank</b>, <b>score</b>, and <b>value over time</b>, as well as Singapore’s 2024 score compared with other economies.
</p>

<p>
  The radial chart allowed for significant experimentation — using <b>size</b>, <b>colour</b>, and structural elements of the chart (such as the “clock-hands”) to represent different dimensions of the data. 
  Size represents <b>score</b>, each “clock-hand” corresponds to a <b>sub-pillar</b>, and colour denotes the <b>decision-maker</b>.
</p>

<iframe
  src="https://public.tableau.com/views/GII2024OurDirectionofInnovation/Tab3?:embed=y&:showVizHome=no"
  width="100%"
  height="900px"
  style={{ border: 'none' }}
/>
    
<h2>Takeaways</h2>
<p>
  I still have a lot to learn about telling compelling <b>data stories</b>, and this project was the starting point for my interest in <b>data visualisation</b>. 
  You can read more about my experience at IPOS <a href="https://www.ipos.gov.sg/careers-overview/life-at-ipos/hear-from-our-interns/talia-tan/" target="_blank" rel="noopener noreferrer">here</a>.
</p>
    </div>
   
    
  );
}
