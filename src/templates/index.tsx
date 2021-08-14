import { graphql } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';
import { colors } from '../styles/colors';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import SkillCard from '../components/SkillCard';
import Pagination from '../components/Pagination';
import { PostCard } from '../components/PostCard';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  PostFeed,
  Posts,
  SiteDescription,
  SiteHeader,
  SiteHeaderContent,
  SiteMain,
  SiteHeaderStyles,
  ResponsiveHeaderBackground,
} from '../styles/shared';
import config from '../website-config';
import { PageContext } from './post';

export interface IndexProps {
  pageContext: {
    currentPage: number;
    numPages: number;
  };
  data: {
    logo: {
      childImageSharp: {
        fixed: FixedObject;
      };
    };
    header: {
      childImageSharp: {
        fixed: FixedObject;
      };
    };
    siteTopCover: {
      childImageSharp: {
        fixed: FixedObject;
      };
    };
    allMarkdownRemark: {
      edges: Array<{
        node: PageContext;
      }>;
    };
  };
}

const IndexPage: React.FC<IndexProps> = props => {
  const { width, height } = props.data.header.childImageSharp.fixed;

  return (
    <IndexLayout css={HomePosts}>
      <Helmet>
        <html lang={config.lang} />
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        <meta property="og:url" content={config.siteUrl} />
        <meta
          property="og:image"
          content={`${config.siteUrl}${props.data.header.childImageSharp.fixed.src}`}
        />

        {config.googleSiteVerification && (
          <meta name="google-site-verification" content={config.googleSiteVerification} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.description} />
        <meta name="twitter:url" content={config.siteUrl} />
        <meta
          name="twitter:image"
          content={`${config.siteUrl}${props.data.header.childImageSharp.fixed.src}`}
        />
        {config.twitter && (
          <meta
            name="twitter:site"
            content={`@${config.twitter.split('https://twitter.com/')[1]}`}
          />
        )}
        <meta property="og:image:width" content={width.toString()} />
        <meta property="og:image:height" content={height.toString()} />
      </Helmet>
      <Wrapper>
        <div
          css={[outer, SiteHeader, SiteHeaderStyles]}
          className="site-header-background"
          style={{
            background: colors.yellow,
            backgroundImage: `url('${props.data.siteTopCover.childImageSharp.fixed.src}')`,
          }}
        >
          <div
            css={inner}
            style={{
              position: 'relative',
              zIndex: '50',
            }}
          >
            <SiteNav isHome />
            <SiteHeaderContent className="site-header-content" css={[ResponsiveHeaderBackground]}>
              <h1 css={[MainTitle]}>{config.title}</h1>
              <p>Web Engineer</p>
              <SiteDescription style={{ color: colors.whitegrey, opacity: '1' }}>
                {config.description}
              </SiteDescription>
            </SiteHeaderContent>
          </div>
        </div>
        <main id="site-main">
          <div className="site-container" css={[SiteMain, outer]}>
            <div css={[inner, Posts]}>
              <div css={[PostFeed]}>
                {props.data.allMarkdownRemark.edges.map((post, index) => {
                  // filter out drafts in production
                  return (
                    (post.node.frontmatter.draft !== true ||
                      process.env.NODE_ENV !== 'production') && (
                      <PostCard key={post.node.fields.slug} post={post.node} large={index === 0} />
                    )
                  );
                })}
              </div>
            </div>
          </div>
          <SkillCard />
        </main>
        {props.children}
        {props.pageContext.numPages > 1 && (
          <Pagination
            currentPage={props.pageContext.currentPage}
            numPages={props.pageContext.numPages}
          />
        )}
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    logo: file(relativePath: { eq: "img/ghost-logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    header: file(relativePath: { eq: "img/blog-cover.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 2000, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    siteTopCover: file(relativePath: { eq: "img/hnck7801.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 2000, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            tags
            draft
            excerpt
            image {
              childImageSharp {
                fluid(maxWidth: 3720) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
          fields {
            readingTime {
              text
            }
            layout
            slug
          }
        }
      }
    }
  }
`;

const MainTitle = css`
  color: ${colors.yellow};
  margin: 0 0 10px;
  & + p {
    font-weight: 700;
    color: ${colors.whitegrey};
  }
`;

const HomePosts = css`
  @media (min-width: 795px) {
    .post-card-large {
      flex: 1 1 100%;
      flex-direction: row;
      padding-bottom: 40px;
      min-height: 280px;
      border-top: 0;
    }

    .post-card-large .post-card-title {
      margin-top: 0;
      font-size: 2.4rem;
    }

    .post-card-large:not(.no-image) .post-card-header {
      margin-top: 0;
    }

    .post-card-large .post-card-image-link {
      position: relative;
      flex: 1 1 auto;
      margin-bottom: 0;
      min-height: 380px;
    }

    .post-card-large .post-card-image {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .post-card-large .post-card-content {
      flex: 0 1 361px;
      justify-content: center;

      a {
        h2 {
          transition: 0.3s ease;
        }
        p {
          transition: 0.3s ease;
        }
        .post-card-meta {
          transition: 0.3s ease;
        }
        &:hover {
          h2 {
            color: #39a0ed;
            transition: 0.3s ease;
          }
          p {
            color: #39a0ed;
            transition: 0.3s ease;
          }
        }
      }
      .post-card-primary-tag {
        a {
          transition: 0.3s ease;
          &:hover + .post-card-meta {
            opacity: 0.6;
            transition: 0.3s ease;
          }
        }
      }
    }

    .post-card-large .post-card-title {
      margin-top: 0;
      font-size: 2.4rem;
    }

    .post-card-large .post-card-content-link {
      padding: 0 0 0 40px;
    }

    .post-card-large .post-card-meta {
      padding: 0 0 0 40px;
    }

    .post-card-large .post-card-excerpt p {
      margin-bottom: 1.5em;
      font-size: 1.8rem;
      line-height: 1.5em;
    }
  }

  a {
    transition: 0.3s ease;
    &:hover {
      text-decoration: none;
      color: #39a0ed;
      transition: 0.3s ease;
    }
  }
`;

export default IndexPage;
