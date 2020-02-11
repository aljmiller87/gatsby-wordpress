import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import MainMenu from "./Menus/MainMenu";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap');
  html,
  body {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

const LayoutWrapper = styled.main`
  max-width: 960px;
  margin: 0 auto;
`;

export const query = graphql`
  {
    favicon: allWordpressWpFavicon {
      edges {
        node {
          url {
            alt_text
            caption
            source_url
          }
        }
      }
    }
  }
`;

const Layout = ({ children }) => {
  const { favicon } = useStaticQuery(query);
  return (
    <>
      <GlobalStyles />
      <Helmet>
        <link rel="icon" href={favicon.edges[0].node.url.source_url} />
      </Helmet>
      <MainMenu />
      <LayoutWrapper>{children}</LayoutWrapper>
      <Footer />
    </>
  );
};

export default Layout;
