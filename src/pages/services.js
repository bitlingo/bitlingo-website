import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import ServiceGroup from "../components/ServiceGroup";
import servicesData from "../data/servicesData";

const ServicePage = () => (
  <Layout>
    <Seo title="Vorträge" />
    <div className={"container"}>
      <div className={"features"}>
        <ServiceGroup data={servicesData} showHr={true}/>
      </div>
    </div>
  </Layout>
);

export default ServicePage;
