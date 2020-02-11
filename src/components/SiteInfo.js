import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

const query = graphql`
  {
    SiteInfo: allWordpressSiteMetadata {
      edges {
        node {
          name
          description
        }
      }
    }
  }
`;

const SiteInfoWrapper = styled.div`
  color: white;
  flex-grow: 1;
  margin: auto 0;
`;

const SiteTitle = styled.div`
  font-weight: bold;
`;

const SiteInfo = () => {
  const { SiteInfo } = useStaticQuery(query);
  return (
    <SiteInfoWrapper>
      <SiteTitle>{SiteInfo.edges[0].node.name}</SiteTitle>
      <div>{SiteInfo.edges[0].node.description}</div>
    </SiteInfoWrapper>
  );
};

export default SiteInfo;
