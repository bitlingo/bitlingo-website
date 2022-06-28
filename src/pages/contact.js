import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Contact from "../components/Contact/Contact";
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
