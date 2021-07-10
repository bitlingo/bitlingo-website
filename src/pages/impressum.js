import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

const text = `
<h3>Angaben gem&auml;&szlig; &sect; 5 TMG</h3>
<p>Kurt, Harter, Daum Bitlingo GbR<br />
Endingerstra&szlig;e, 39A<br />
79346 Endingen</p>

<p><strong>Vertreten durch:</strong><br />
Cenan Kurt<br />
Laurin Harter<br />
Grischa Daum</p>

<h3>Kontakt</h3>
<p>Telefon: 017634636552<br />
E-Mail: info@bitlingo.de</p>

<h3>EU-Streitschlichtung</h3>
<p>Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

<h3>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h3>
<p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

<p>Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a></p>`;

const Impressum = () => (
  <Layout>
    <Seo title="Impressum" />
    <div className={"container"}>
      <div className={"content"}>
        <div className={"title"}>
          <h1>Impressum</h1>
        </div>
        <div dangerouslySetInnerHTML={{__html: text}}></div>
      </div>
    </div>
  </Layout>
);

export default Impressum;
