import { Link } from 'gatsby';
import React from 'react';
import { darken } from 'polished';
import { css } from '@emotion/react';

import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { colors } from '../styles/colors';

export interface PaginationProps {
  currentPage: number;
  numPages: number;
}

const Pagination: React.FunctionComponent<PaginationProps> = ({ currentPage, numPages }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return (
    <nav css={navCss}>
      <div>
        {!isFirst && (
          <AniLink cover direction="left" duration={1.2} to={prevPage} rel="prev">
            {/* << symbol */}
            {String.fromCharCode(171)}
          </AniLink>
        )}

        {Array.from({ length: numPages }, (_, i) => (
          <AniLink
            cover
            direction="left"
            duration={1.2}
            key={`pagination-number${i + 1}`}
            className={i + 1 === currentPage ? 'active' : ''}
            to={`/${i === 0 ? '' : i + 1}`}
          >
            {i + 1}
          </AniLink>
        ))}

        {!isLast && (
          <AniLink cover direction="left" duration={1.2} to={nextPage} rel="next">
            {/* >> symbol */}
            {String.fromCharCode(187)}
          </AniLink>
        )}
      </div>
    </nav>
  );
};

const navCss = css`
  text-align: center;
  div {
    display: inline-block;
  }

  a {
    background: #fff;
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color 0.3s;
    border: 1px solid #ddd;
    margin: 0 4px;
    box-shadow: rgba(39, 44, 49, 0.06) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
    border-radius: 6px;
    margin-bottom: 5px;
    min-width: 50px;

    &.active {
      -webkit-box-shadow: inset 3px 0px 0px 0px ${darken(0.05, colors.darkgrey)};
      -moz-box-shadow: inset 3px 0px 0px 0px ${darken(0.05, colors.darkgrey)};
      box-shadow: inset 3px 0px 0px 0px ${darken(0.05, colors.darkgrey)};
    }

    &:hover:not(.active) {
      background-color: #ddd;
    }

    &:hover {
      text-decoration: none;
    }
  }
`;

export default Pagination;
