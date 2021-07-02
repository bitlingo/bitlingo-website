import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found"/>
        <div className={"container"}>
            <h1>NOT FOUND</h1>
            <p>Leider haben wir die Seite für dich noch nicht erstellt 😔</p>
        </div>
    </Layout>
)

export default NotFoundPage
