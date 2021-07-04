import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Presentations from "../components/presentations"

import presentationData from "../data/presentationData"

const Lectures = () => (
    <Layout>
        <Seo title="Vorträge"/>
        <div className={"container"}>
            <div className={"features"}>
                <Presentations data={presentationData} />
            </div>
        </div>
    </Layout>
)

export default Lectures
