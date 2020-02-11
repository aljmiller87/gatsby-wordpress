import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

export const query = graphql`
  {
    logo: allWordpressWpLogo {
      edges {
        node {
          url {
            alt_text
            source_url
          }
        }
      }
    }
  }
`;

const StyledLogo = styled.img`
  margin-right: 1rem;
  max-width: 50px;
`;

const Logo = () => {
  const { logo } = useStaticQuery(query);
  return (
    <div>
      <StyledLogo src={logo.edges[0].node.url.source_url} alt="logo" />
    </div>
  );
};

export default Logo;
