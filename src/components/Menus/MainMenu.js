import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";
import SiteInfo from "../SiteInfo";
import Logo from "../Logo";

export const query = graphql`
  {
    menus: allWordpressWpApiMenusMenusItems(
      filter: { name: { eq: "Main Menu" } }
    ) {
      edges {
        menu: node {
          items {
            title
            object_slug
          }
        }
      }
    }
  }
`;

const MainMenuWrapper = styled.nav`
  background: rgb(3, 27, 77);
  display: flex;
  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  display: block;
  padding: 0.5rem 1rem;
`;

const MainMenuInner = styled.div`
  display: flex;
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
`;

const MainMenu = () => {
  const { menus } = useStaticQuery(query);
  return (
    <MainMenuWrapper>
      <MainMenuInner>
        <Logo />
        <SiteInfo />
        <ul>
          {menus.edges[0].menu.items.map(link => {
            return (
              <li key={link.object_slug}>
                <StyledLink to={link.object_slug}>{link.title}</StyledLink>
              </li>
            );
          })}
        </ul>
      </MainMenuInner>
    </MainMenuWrapper>
  );
};

export default MainMenu;
