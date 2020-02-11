import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

const FeaturedIage = styled.img`
  margin: 16px 0;
  max-width: 300px;
`;

const portfolio = ({ pageContext }) => {
  console.log("pageContext", pageContext);
  return (
    <Layout>
      <h1>{pageContext.title}</h1>
      <FeaturedIage
        src={pageContext.featured_media.source_url}
        alt={pageContext.featured_media.alt_text}
      />
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }}></div>
    </Layout>
  );
};

export default portfolio;
