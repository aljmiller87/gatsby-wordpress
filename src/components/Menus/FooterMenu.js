import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

export const query = graphql`
  {
    menus: allWordpressWpApiMenusMenusItems(
      filter: { name: { eq: "Footer" } }
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

const MainMenu = () => {
  const { menus } = useStaticQuery(query);
  return (
    <div>
      <ul>
        {menus.edges[0].menu.items.map(link => {
          return (
            <li key={link.object_slug}>
              <Link to={link.object_slug}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MainMenu;
