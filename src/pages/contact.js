import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Contact from "../components/contact";
import "./contact.less";

const ContactPage = () => (
  <Layout>
    <Seo title="Kontakt" />
    <div className={"container"}>
      <Contact />
    </div>
  </Layout>
);

export default ContactPage;
