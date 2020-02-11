import React from "react";
import Layout from "../components/layout";
import PortfolioItems from "../components/PortfolioItems";

const PortfolioUnderContent = ({ pageContext }) => {
  console.log("pageContext", pageContext);
  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
      <PortfolioItems />
    </Layout>
  );
};

export default PortfolioUnderContent;
