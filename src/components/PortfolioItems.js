import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";

export const query = graphql`
  {
    portfolios: allWordpressWpPortfolio {
      edges {
        portfolio: node {
          slug
          title
          featured_media {
            source_url
            alt_text
          }
          excerpt
          content
        }
      }
    }
  }
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
`;

const PortfolioItem = styled.div`
  border: solid 1px #efefef;
  padding: 1rem;
  margin: 1rem;
  width: 300px;
`;

const PortfolioImage = styled.img`
  max-width: 100%;
`;

const PortfolioItems = () => {
  const { portfolios } = useStaticQuery(query);
  return (
    <Wrapper>
      {portfolios.edges.map(({ portfolio }) => {
        return (
          <PortfolioItem key={portfolio.id}>
            <h2>{portfolio.title}</h2>
            <PortfolioImage
              src={portfolio.featured_media.source_url}
              alt={portfolio.featured_media.alt_text}
            />
            <div dangerouslySetInnerHTML={{ __html: portfolio.excerpt }}></div>
            <Link to={`/portfolio/${portfolio.slug}`}> Read More</Link>
          </PortfolioItem>
        );
      })}
    </Wrapper>
  );
};

export default PortfolioItems;
