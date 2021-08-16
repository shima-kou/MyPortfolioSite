import React from 'react';

import { css } from '@emotion/react';
import { outer, ProfileMain } from '../styles/shared';
import { colors } from '../styles/colors';
import { fontSize } from '../styles/fontSize';

export const SkillCard: React.FC = () => {
  return (
    <div className="site-container" css={[outer, ProfileMain]}>
      <div className="column-container" css={[SkillCardContainer]}>
        <h2 css={[SectionTitle]}>Skill</h2>
        <div className="row" css={[SkillCardRow]}>
          <div css={[SkillCardColumn]}>
            <div className="SkillCard">
              <h3>デザイン</h3>
              <ul>
                <li>HTML (Pag, JSX)</li>
                <li>CSS (Sass, SCSS, LESS, CSS in JS)</li>
                <li>Adobe PhotoShop、Adobe XD</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
          <div css={[SkillCardColumn]}>
            <div className="SkillCard">
              <h3>CMS</h3>
              <ul>
                <li>WordPress (WelCart)</li>
                <li>CS-Cart</li>
                <li>EC-CUBE (EC-CUBE3, EC-CUBE4)</li>
              </ul>
            </div>
          </div>
          <div css={[SkillCardColumn]}>
            <div className="SkillCard">
              <h3>フロントエンド</h3>
              <ul>
                <li>JavaScript (Vue, React, TypeScript)</li>
                <li>GLSL (three.js)</li>
              </ul>
            </div>
          </div>
          <div css={[SkillCardColumn]}>
            <div className="SkillCard">
              <h3>バックエンド</h3>
              <ul>
                <li>PHP (Laravel, Smarty)</li>
                <li>ASP.net</li>
                <li>SQL</li>
                <li>Linux</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionTitle = css`
  font-weight: 600;
  margin: 0 20px 30px;
  color: ${colors.darkgrey};
  @media (max-width: 768px) {
    margin-top: 0.2em;
  }

  @media (prefers-color-scheme: dark) {
    color: ${colors.darkgrey};
  }
`;

const SkillCardContainer = css`
  position: relative;
  padding: 70px 50px 85px;
  max-width: 1180px;
  margin: auto;
  box-sizing: border-box;
  @media (max-width: 767px) {
    padding: 0px 0 10px;
  }
`;

const SkillCardRow = css`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
`;

const SkillCardColumn = css`
  max-width: 50%;
  flex: 0 0 50%;
  padding: 0 20px 35px;
  box-sizing: border-box;
  @media (max-width: 767px) {
    max-width: 100%;
    flex: 0 0 100%;
    padding: 0 0 35px;
  }
  .SkillCard {
    color: ${colors.whitegrey};
    padding: 0.3vw 2vw 1.5vw;
    background: ${colors.darkgrey};
    height: 100%;
    border-radius: 5px;
    @media (max-width: 767px) {
      padding: 18px 20px 10px;
    }
    h3 {
      font-size: ${fontSize.fz5};
      line-height: 1.3;
      font-weight: 700;
      color: ${colors.whitegrey};
      border-bottom: 1px solid ${colors.whitegrey};
      padding: 25px 0 14px;
      margin: 0;
      @media (max-width: 767px) {
        font-size: ${fontSize.fz6};
        padding: 0 0 10px;
        line-height: 1.35;
      }
    }
    ul {
      margin-top: 20px;
    }
  }
`;

export default SkillCard;
