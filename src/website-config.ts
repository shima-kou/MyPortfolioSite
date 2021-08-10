export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage?: string;
  logo: string;
  lang: string;
  siteUrl: string;
  facebook?: string;
  twitter?: string;
  showSubscribe: boolean;
  mailchimpAction?: string;
  mailchimpName?: string;
  mailchimpEmailFieldName?: string;
  googleSiteVerification?: string;
  footer?: string;
}

const config: WebsiteConfig = {
  title: 'K.S Daily Coding',
  description: 'フロントエンドとバックエンド、たまにデザインをやる雑多エンジニアのブログです。',
  coverImage: 'img/blog-cover.png',
  logo: 'img/logo.svg',
  lang: 'ja',
  siteUrl: '',
  twitter: 'https://twitter.com/kakona_ru',
  showSubscribe: false,
  mailchimpAction: '',
  mailchimpName: '',
  mailchimpEmailFieldName: '',
  googleSiteVerification: '',
  footer: 'All rights reserved.',
};

export default config;
