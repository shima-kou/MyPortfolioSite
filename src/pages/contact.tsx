import React, { useState } from 'react';
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

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const textInput = css`
  .contact__area {
    & + .contact__area {
      margin: 25px 0 0;
    }
    > div {
      max-width: 100%;
      width: 100%;
      background-color: rgba(214, 214, 214, 0.2);
    }
    label {
      color: ${colors.darkgrey};
      @media (prefers-color-scheme: dark) {
        color: ${colors.white};
      }
    }
    input {
      max-width: 100%;
      width: 100%;
      &:-internal-autofill-selected {
        background-color: rgba(214, 214, 214, 0.2) !important;
      }
    }

    textarea {
      max-width: 100%;
      width: 100%;
    }
  }

  .contact__btn {
    margin: 30px 0 0;
    > button {
      padding: 13px 16px;
      width: 120px;
    }
  }
`;

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'subject':
        setSubject(e.target.value);
        break;
      case 'message':
        setMessage(e.target.value);
        break;
      default:
        console.log('key not found');
    }
  };

  const canSubmit = () => {
    if (name === '') return true;
    if (email === '') return true;
    if (subject === '') return true;
    if (message === '') return true;

    return false;
  };

  return (
    <IndexLayout>
      <Helmet>
        <title>Contact</title>
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
                <PostFullTitle className="post-full-title">Contact</PostFullTitle>
              </PostFullHeader>

              <PostFullContent className="post-full-content">
                <div className="contact-block">
                  <p>
                    当サイトをご覧いただきありがとうございます。このサイトを通して、私のことを少しでも知っていただけたのなら嬉しいです。何かご連絡等がございましたら下記フォームをご利用ください。
                  </p>
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    css={textInput}
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="hidden" name="bot-field" />
                    <div className="contact__area">
                      <TextField
                        id="name"
                        className="contact__field"
                        name="name"
                        label="お名前"
                        type="text"
                        variant="outlined"
                        value={name}
                        variant="filled"
                        color="primary"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="contact__area">
                      <TextField
                        id="email"
                        className="contact__field"
                        name="email"
                        label="メールアドレス"
                        type="email"
                        variant="outlined"
                        value={email}
                        variant="filled"
                        color="primary"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="contact__area">
                      <TextField
                        id="subject"
                        className="contact__field"
                        name="subject"
                        label="件名"
                        type="text"
                        variant="outlined"
                        value={subject}
                        variant="filled"
                        color="primary"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="contact__area">
                      <TextField
                        id="message"
                        className="contact__field"
                        name="message"
                        label="問い合わせ内容"
                        multiline
                        rows={4}
                        variant="outlined"
                        value={message}
                        variant="filled"
                        color="primary"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="contact__btn">
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={canSubmit()}
                      >
                        送信
                      </Button>
                    </div>
                  </form>
                </div>
              </PostFullContent>
            </article>
          </div>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

export default Contact;
