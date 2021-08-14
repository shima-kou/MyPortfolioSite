import { graphql, Link, StaticQuery } from 'gatsby';
import React from 'react';
import { css } from '@emotion/react';
import { FixedObject } from 'gatsby-image';
import config from '../../website-config';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

interface SiteNavLogoProps {
  logo?: {
    childImageSharp: {
      fixed: FixedObject;
    };
  };
}

export const SiteNavLogo = () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        logo: file(relativePath: { eq: "img/MainIllust.jpg" }) {
          childImageSharp {
            fixed(quality: 100, width: 500) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={(data: SiteNavLogoProps) => (
      <AniLink cover duration={0.6} to="/" bg="#ffcb37">
        <p className="site-nav-logo" css={SiteNavLogoStyles}>
          {config.title}
        </p>
      </AniLink>
    )}
  />
);

const SiteNavLogoStyles = css`
  position: relative;
  z-index: 100;
  flex-shrink: 0;
  display: inline-block;
  margin-right: 32px;
  padding: 12px 0;
  color: #fff;
  font-size: 1.7rem;
  line-height: 1.8rem;
  font-weight: bold;
  letter-spacing: -0.5px;
  text-transform: none;

  :hover {
    text-decoration: none;
  }

  img {
    display: block;
    width: auto;
    height: 100px;
  }
`;
