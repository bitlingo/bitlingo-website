import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PresentationGroup from "../components/PresentationGroup";

import presentationData from "../data/presentationData";

const Lectures = () => (
  <Layout>
    <Seo title="Vorträge" />
    <div className={"container"}>
      <div className={"features"}>
        <PresentationGroup data={presentationData} showHr={true} showLearningContent={true} />
      </div>
    </div>
  </Layout>
);

export default Lectures;
