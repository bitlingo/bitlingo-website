import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Team from "../components/team";
import Pricing from "../components/pricing/pricing";
import cowork from "../../static/images/cowork.jpg";
import presentationData from "../data/presentationData";
import Presentations from "../components/presentations";

const presentationDataLandingPage = presentationData.slice(0, 3);

const IndexPage = () => (
  <Layout>
    <Seo title="Bitlingo - deine Lernpartner" />

    <div className={"page-header home"}>
      <h1>Bitlingo</h1>
      <p>Bitcoin, Blockchain und Kryptowährungen einfach erklärt.</p>
      <div className={"container"}>
        <span>
          Wir sind <strong>Bitlingo</strong> - Deine Lernbegleiter für alles
          rund um das Thema Kryptowährungen und Blockchain-Technologie. Wir sind
          ein junges 3-köpfiges Team mit dem Ziel möglichst vielen Menschen die
          Welt der Kryptowährungen näher zu bringen. Mit unserer Expertise und
          langjähriger Erfahrung im Kryptomarkt ermöglichen wir
          deutschsprachigen Unternehmen zu einem Vorreiter in der neuen,
          aufblühenden Krypto-Industrie zu werden. Wir bieten umfangreiche
          Vorträge und Weiterbildungsseminare an und bereiten Deine
          Mitarbeiter:innen optimal auf die Zukunft vor.
        </span>
      </div>
      <img alt={"Team Foto"} src={cowork} style={{ borderRadius: "10px" }} />
    </div>

    <div className={"container"}>
      <div className={"features"}>
        <hr />
        <Presentations
          data={presentationDataLandingPage}
          showHr={true}
          showLearningContent={true}
        />
        <Link to="/lectures">
          <div className={"button"}>Weitere Vorträge</div>
        </Link>
        <hr />
        <Team />
        <hr />
        <Pricing />
      </div>
    </div>

    <div className={"call-to-action"}>
      <div className={"container"}>
        <div className={"call-to-action__content"}>
          <h2>Interesse an einem Vortrag?</h2>
          <p>
            Tritt in Kontakt mit dem Bitlingo Team und lass Dich beraten. Wir
            freuen uns von Dir zu hören.
          </p>
        </div>

        <div className={"button"}>
          <a href="mailto:info@bitlingo.de">Ich möchte lernen!</a>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
