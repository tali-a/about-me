import React from "react";
import CaseStudy from "../../components/CaseStudy";

export default function MaribankContent() {
  const slides = [
    { image: `${import.meta.env.BASE_URL}MARI/1.png`, alt: "MariBank Slide 1" },
    { image: `${import.meta.env.BASE_URL}MARI/2.png`, alt: "MariBank Slide 2" },
    { image: `${import.meta.env.BASE_URL}MARI/3.png`, alt: "MariBank Slide 3" },
    { image: `${import.meta.env.BASE_URL}MARI/4.png`, alt: "MariBank Slide 4" },
    { image: `${import.meta.env.BASE_URL}MARI/5.png`, alt: "MariBank Slide 5" },
    { image: `${import.meta.env.BASE_URL}MARI/6.png`, alt: "MariBank Slide 6" },
    { image: `${import.meta.env.BASE_URL}MARI/7.png`, alt: "MariBank Slide 7" },
    { image: `${import.meta.env.BASE_URL}MARI/8.png`, alt: "MariBank Slide 8" },
    { image: `${import.meta.env.BASE_URL}MARI/9.png`, alt: "MariBank Slide 9" },
    { image: `${import.meta.env.BASE_URL}MARI/10.png`, alt: "MariBank Slide 10" },
    { image: `${import.meta.env.BASE_URL}MARI/11.png`, alt: "MariBank Slide 11" },
    { image: `${import.meta.env.BASE_URL}MARI/12.png`, alt: "MariBank Slide 12" },
    { image: `${import.meta.env.BASE_URL}MARI/13.png`, alt: "MariBank Slide 13" },
    { image: `${import.meta.env.BASE_URL}MARI/14.png`, alt: "MariBank Slide 14" },
    { image: `${import.meta.env.BASE_URL}MARI/15.png`, alt: "MariBank Slide 15" },
  ];

  const problem = {
    title: "Problem",
    description: `While competitive deposit rates remain a strong initial draw, declining interest rates across the market make it increasingly unsustainable to compete on rates alone. Trust and GXS are increasingly differentiating through goal-based savings features and ecosystem-linked benefits, which drive habitual usage and retention. MariBank's existing strengths are in investment offerings and SME linkages. MariBank's deposit "stickiness" has significant potential for growth.`
  };

  const solution = {
    title: "Solution",
    description: `To strengthen MariBank's competitive position, I have 2 key recommendations:

1️⃣ Behavioural Nudges (Growth) 
- Provide micro-feedback loops linking MariSavings growth to potential MariInvest outcomes.  
- Contextual, goal-based nudges at moments of high intent (e.g., idle balances, interest payout).  
- Low-friction prompts that inform users about investment opportunities without pressure.  

2️⃣ Habit & Automation (Stickiness) 
- Optional scheduled or recurring actions: auto-sweep from MariSavings into Fixed Deposits or recurring investment placements.  
- Encourage habitual engagement while preserving simplicity and user trust.  
- Users remain fully in control of amounts and frequency.  

Expected Impact: Higher MariInvest adoption and engagement, stronger retention and balance growth, and improved linkage between savings and investments.`
  };

  const context = "Competitive analysis and product strategy assessment of Singapore's Digital Banking landscape - to make product-led recommendations that drive engagement and growth for MariBank";

  return (
    <CaseStudy
      title="Strengthening MariBank's Investment and Savings Engagement"
      context={context}
      problem={problem}
      solution={solution}
      slides={slides}
    />
  );
}

