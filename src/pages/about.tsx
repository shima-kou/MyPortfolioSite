import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';
import { fontSize } from '../styles/fontSize';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  .post-content {
    h2 {
      font-size: ${fontSize.fz4};
      line-height: 1.4;
      letter-spacing: 0.08em;
      color: ${colors.darkgrey};
      text-align: left;
      margin: 0 0 5rem;
      @media (prefers-color-scheme: dark) {
        color: ${colors.whitegrey};
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">About</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <p>
                  現在はフロントエンドを中心にバックエンド部分もかじっています。
                  <br />
                  日々の作業や実装内容や詰まった点のメモなど、そのほか気になった記事についても記事を書いていこうと思っています。
                  <br />
                </p>
                <ul>
                  <li>
                    <strong>好きなこと</strong> - 表示の動きの実装
                  </li>
                  <li>
                    <strong>目指したいこと</strong> -
                    ユーザーが快適に使えるようなアプリやサイトの作れるエンジニア
                  </li>
                </ul>
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
