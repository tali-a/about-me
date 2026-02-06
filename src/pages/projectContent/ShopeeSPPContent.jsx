import React from "react";
import CaseStudy from "../../components/CaseStudy";

export default function ShopeeSPPContent() {
  // Define your slides - replace these with actual image paths
const slides = [
  { image: "/SPP/Slide1.PNG", alt: "Shopee SPP Slide 1" },
  { image: "/SPP/Slide2.PNG", alt: "Shopee SPP Slide 2" },
  { image: "/SPP/Slide3.PNG", alt: "Shopee SPP Slide 3" },
  { image: "/SPP/Slide4.PNG", alt: "Shopee SPP Slide 4" },
  { image: "/SPP/Slide5.PNG", alt: "Shopee SPP Slide 5" },
  { image: "/SPP/Slide6.PNG", alt: "Shopee SPP Slide 6" },
  { image: "/SPP/Slide7.PNG", alt: "Shopee SPP Slide 7" },
  { image: "/SPP/Slide8.PNG", alt: "Shopee SPP Slide 8" },
  { image: "/SPP/Slide9.PNG", alt: "Shopee SPP Slide 9" },
  { image: "/SPP/Slide10.PNG", alt: "Shopee SPP Slide 10" },
  { image: "/SPP/Slide11.PNG", alt: "Shopee SPP Slide 11" },
  { image: "/SPP/Slide12.PNG", alt: "Shopee SPP Slide 12" },
  { image: "/SPP/Slide13.PNG", alt: "Shopee SPP Slide 13" },
  { image: "/SPP/Slide14.PNG", alt: "Shopee SPP Slide 14" },
  { image: "/SPP/Slide15.PNG", alt: "Shopee SPP Slide 15" },
  { image: "/SPP/Slide16.PNG", alt: "Shopee SPP Slide 16" },
  { image: "/SPP/Slide17.PNG", alt: "Shopee SPP Slide 17" },
  { image: "/SPP/Slide18.PNG", alt: "Shopee SPP Slide 18" },
  { image: "/SPP/Slide19.PNG", alt: "Shopee SPP Slide 19" },
  { image: "/SPP/Slide20.PNG", alt: "Shopee SPP Slide 20" },
];

  const problem = {
    title: "Problem",
    description: `Shopee's self-collection (SPP) model faces three interconnected barriers:
    
    1. Pricing perception misalignment: Consumers currently think self-collection is too expensive and fail to recognise benefits.
    
    2. Operational capacity constraints: Users disproportionately prefer shop and locker SPP modes.
    
    3. Service experience gaps at residential points: Residential collection points are viewed as unreliable and thus undesirable.`
  };

  const solution = {
    title: "Solution",
    description: `Shopee should put these steps into action:

    ✓ Reposition SPPs through clear ROI messaging, ensuring that more than 70% of its Singapore user base understands tangible benefits such as free or lower shipping and fewer failed deliveries.

    ✓ Introduce an in-app SPP rating system, allowing users to rate and review collection points; this builds trust, and enables low-performing locations to be phased out.

    ✓ Selectively increase capacity at both residential and non-residential points, with investment skewed toward non-residential venues if negative perceptions of residential locations persist.

    📈 Projected Impact: Anticipated 35% lift in selection of 'Pickup Point' at eligible checkout.`
  };

  return (
    <CaseStudy
      title="Increasing adoption of Shopee Pickup Points (SPPs)"
      context="Developed strategic recommendations to boost SPP usage in Singapore. This case study was completed under TalentGeist WSP."
      problem={problem}
      solution={solution}
      slides={slides}
    />
  );
}