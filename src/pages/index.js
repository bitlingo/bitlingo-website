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
                    <h2>Sign up for free</h2>
                    <p>Sign up and start increasing the productivity of your business with HiStaff.</p>
                </div>

                <div className={"button"}>
                    <a href="https://app.bitlingo.de" target={"_blank"}>Get Started</a>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
