import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Team from "../components/team";
import Pricing from "../components/pricing";
import featureImage from "../../static/images/vortrag.jpg";
import bitlingoTeamImage from "../../static/images/bitlingo_team.jpg";
import presentationData from "../data/presentationData";
import Presentations from "../components/presentations";

const presentationDataLandingPage = presentationData.slice(0, 3);

const IndexPage = () => (
  <Layout>
    <Seo title="Bitlingo GbR" />

    <div className={"page-header home"}>
      <h1>Bitlingo GbR</h1>
      <p>Bitcoin, Blockchain und Kryptowährungen einfach erklärt.</p>
      <img
        alt={"Team Foto"}
        src={featureImage}
        style={{ borderRadius: "10px" }}
      />
    </div>

    <div className={"container"}>
      <div className={"features"}>
        <Presentations data={presentationDataLandingPage} />
        <Team />
        <Pricing />
      </div>
    </div>

    <div className={"call-to-action"}>
      <div className={"container"}>
        <div className={"call-to-action__content"}>
          <h2>Interesse an einem Vortrag?</h2>
          <p>
            Treten Sie in Kontakt mit dem Bitlingo Team und lassen Sie sich
            beraten.
          </p>
        </div>

        <div className={"button"}>
          <a href="mailto:info@bitlingo.de">Ich möchte Lernen!</a>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
