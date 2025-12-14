import React from "react";
import { useParams } from "react-router-dom";
import IPOSContent from "./projectContent/IPOSContent";
import CausalContent from "./projectContent/CausalContent.jsx";
import AdvisoryContent from "./projectContent/AdvisoryContent.jsx";
import TembusuContent from "./projectContent/TembusuContent.jsx";

export default function ProjectDetail() {
  const { projectId } = useParams();

  const projectContent = {
    "ipos-innovation": <IPOSContent />,
    "causal-analysis": <CausalContent />,
    "advisory": <AdvisoryContent /> ,
    "tembusu": <TembusuContent/>
  };

  return (
    <main className="page-container">
      {projectContent[projectId] || <p>Project not found</p>}
    </main>
  );
}

