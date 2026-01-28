import React from "react";
import { useParams } from "react-router-dom";
import IPOSContent from "./projectContent/IPOSContent";
import CausalContent from "./projectContent/CausalContent.jsx";
import AdvisoryContent from "./projectContent/AdvisoryContent.jsx";
import TembusuContent from "./projectContent/TembusuContent.jsx";
import ShopeeSPPContent from "./projectContent/ShopeeSPPContent.jsx";

export default function ProjectDetail() {
  const { projectId } = useParams();

  console.log("Current projectId:", projectId); // Add this to debug
  console.log("All params:", useParams()); // And this

  const projectContent = {
    "ipos-innovation": <IPOSContent />,
    "causal-analysis": <CausalContent />,
    "advisory": <AdvisoryContent /> ,
    "tembusu": <TembusuContent/>,
    "shopee-spp": <ShopeeSPPContent />
  };

  return (
    <main className="page-container">
      {projectContent[projectId] || <p>Project not found</p>}
    </main>
  );
}



