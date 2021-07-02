import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Team from "../components/team"
import featureImage from "../../static/images/vortrag.jpg"
import Presentations from "../components/presentations"

const IndexPage = () => (
    <Layout>
        <SEO title="Bitlingo GbR"/>

        <div className={"page-header home"}>
            <h1>Bitlingo GbR</h1>
            <p>Bitcoin, Blockchain und Kryptowährungen einfach erklärt.</p>
            <img alt={"Dashboard"} src={featureImage} style={{borderRadius: "10px"}}/>
        </div>

        <div className={"container"}>
            <div className={"features"}>
                
                <Presentations />

                <Team></Team>
            </div>
        </div>

        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>Interesse an einem Vortrag?</h2>
                    <p>Treten Sie in Kontakt mit dem Bitlingo Team und lassen Sie sich beraten.</p>
                </div>

                <div className={"button"}>
                    <a href="mailto:info@bitlingo.de" target={"_blank"}>Ich möchte Lernen!</a>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
