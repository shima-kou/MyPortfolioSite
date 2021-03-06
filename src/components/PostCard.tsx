import { format } from 'date-fns';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import _ from 'lodash';
import { lighten } from 'polished';
import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '../styles/colors';
import { fontSize } from '../styles/fontSize';
import { PageContext } from '../templates/post';

import AniLink from 'gatsby-plugin-transition-link/AniLink';

export interface PostCardProps {
  post: PageContext;
  large?: boolean;
}

export const PostCard: React.FC<PostCardProps> = ({ post, large = false }) => {
  const date = new Date(post.frontmatter.date);
  // 2018-08-20
  const datetime = format(date, 'yyyy-MM-dd');

  return (
    <article
      className={`post-card ${post.frontmatter.image ? '' : 'no-image'} ${
        large ? 'post-card-large' : ''
      }`}
      css={[PostCardStyles, large && PostCardLarge]}
    >
      {post.frontmatter.image && (
        <div className="post-card-image-link">
          <AniLink cover duration={0.6} bg="#ffcb37" to={post.fields.slug}>
            <PostCardImage className="post-card-image">
              {post.frontmatter?.image?.childImageSharp?.fluid && (
                <Img
                  alt={`${post.frontmatter.title} cover image`}
                  style={{ height: '100%' }}
                  fluid={post.frontmatter.image.childImageSharp.fluid}
                />
              )}
            </PostCardImage>
          </AniLink>
        </div>
      )}
      <PostCardContent className="post-card-content">
        <AniLink cover duration={0.6} bg="#ffcb37" to={post.fields.slug}>
          <div className="post-card-content-link" css={PostCardContentLink}>
            <PostCardHeader className="post-card-header">
              <PostCardTitle className="post-card-title">{post.frontmatter.title}</PostCardTitle>
            </PostCardHeader>
            <PostCardExcerpt className="post-card-excerpt">
              <p>{post.frontmatter.excerpt || post.excerpt}</p>
            </PostCardExcerpt>
          </div>
        </AniLink>
        <PostCardMeta className="post-card-meta">
          <PostCardBylineContent className="post-card-byline-content">
            <span className="post-card-byline-date">
              <time dateTime={datetime}>{datetime}</time>
              {post.frontmatter.tags && (
                <PostCardPrimaryTag className="post-card-primary-tag">
                  <AniLink
                    cover
                    duration={0.6}
                    bg="#ffcb37"
                    to={`/tags/${_.kebabCase(post.frontmatter.tags[0])}/`}
                  >
                    {post.frontmatter.tags[0]}
                  </AniLink>
                </PostCardPrimaryTag>
              )}
            </span>
          </PostCardBylineContent>
        </PostCardMeta>
      </PostCardContent>
    </article>
  );
};

const PostCardStyles = css`
  position: relative;
  flex: 1 1 301px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 0 40px;
  padding: 0 20px 40px;
  min-height: 220px;
  background-size: cover;
`;

const PostCardLarge = css`
  @media (min-width: 795px) {
    flex: 1 1 100%;
    flex-direction: row;
    padding-bottom: 40px;
    min-height: 280px;
    border-top: 0;

    :not(.no-image) .post-card-header {
      margin-top: 0;
    }

    .post-card-image-link {
      position: relative;
      flex: 1 1 auto;
      margin-bottom: 0;
      min-height: 380px;
    }

    .post-card-image {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .post-card-content {
      flex: 0 1 361px;
      justify-content: center;
    }

    .post-card-title {
      font-size: ${fontSize.fz4}
      margin-top: 0;
      line-height: 1.5;
      font-weight: 700;
    }

    .post-card-content-link {
      padding: 0 0 0 40px;
    }

    .post-card-meta {
      padding: 0 0 0 40px;
    }

    .post-card-excerpt p {
      margin-bottom: 1.5em;
      line-height: 1.5em;
    }
  }
`;

const PostCardImageLink = css`
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
`;

const PostCardImage = styled.div`
  width: auto;
  height: 200px;
  background: ${colors.lightgrey} no-repeat center center;
  background-size: cover;

  @media (prefers-color-scheme: dark) {
    background: ${colors.darkmode};
  }
`;

const PostCardContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  a {
    h2,
    p {
      transition: 0.3s ease;
    }
    &:hover {
      h2,
      p {
        transition: 0.3s ease;
        color: ${colors.blue};
      }
    }
  }
`;

const PostCardContentLink = css`
  position: relative;
  display: block;
  /* color: var(--darkgrey); */
  color: ${colors.darkgrey};

  :hover {
    text-decoration: none;
  }
`;

const PostCardPrimaryTag = styled.div`
  margin: 0 0 0.2em;
  /* color: var(--blue); */
  color: ${colors.blue};
  font-weight: 500;
  letter-spacing: 0.2px;
  text-transform: uppercase;
`;

const PostCardTitle = styled.h2`
  font-size: ${fontSize.fz4};
  margin: 0 0 0.4em;
  line-height: 1.35em;
  transition: color 0.2s ease-in-out;
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.85);
  }
`;

const PostCardExcerpt = styled.section`
  @media (prefers-color-scheme: dark) {
    /* color: color(var(--midgrey) l(+10%)); */
    color: ${lighten('0.1', colors.midgrey)} !important;
  }
`;

const PostCardMeta = styled.footer`
  display: flex;
  align-items: flex-start;
  padding: 0;
`;

const PostCardBylineContent = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  margin: 4px 0 0;
  /* color: color(var(--midgrey) l(+10%)); */
  color: ${lighten('0.1', colors.midgrey)};
  line-height: 1.4em;
  font-weight: 400;
  letter-spacing: 0.2px;
  text-transform: uppercase;

  span {
    margin: 0;
  }

  a {
    /* color: color(var(--darkgrey) l(+20%)); */
    color: ${lighten('0.2', colors.darkgrey)};
    font-weight: 600;
  }

  .post-card-primary-tag {
    a {
      color: ${colors.blue};
      font-weight: 500;
      letter-spacing: 0.2px;
      text-transform: uppercase;
      margin: 6px 0 0;
      display: inline-block;
    }
  }

  @media (prefers-color-scheme: dark) {
    a {
      color: rgba(255, 255, 255, 0.75);
    }
  }
`;

const PostCardHeader = styled.header`
  margin: 15px 0 0;
`;

export const StaticAvatar = css`
  display: block;
  overflow: hidden;
  margin: 0 0 0 -6px;
  width: 34px;
  height: 34px;
  border: #fff 2px solid;
  border-radius: 100%;

  @media (prefers-color-scheme: dark) {
    /* border-color: color(var(--darkgrey) l(+2%)); */
    border-color: ${lighten('0.02', colors.darkgrey)};
  }
`;
