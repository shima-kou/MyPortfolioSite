---
title: 'GatsbyJSで手軽にページ遷移アニメーションを実装する'
tags: [GatsbyJS]
image: img/soucecodeIMGL9025_TP_V.jpg
date: '2021-08-11T10:00:00.000Z'
draft: false
excerpt: Gatsby や React でページ遷移アニメーションを行うには様々なプラグインなどもありますが、今回はその中でも比較的簡単に実装できる Gatsby Plugin Transition Link のプラグインの使い方について備忘録です。
---

## 前書き

本日 web サイトなどを閲覧しているとページ遷移アニメーションがサイトに実装されているのをよく見かけるようになりました。
Gatsby や React でページ遷移アニメーションを行うには様々なプラグインなどもありますが、今回はその中でも比較的簡単に実装できる Gatsby Plugin Transition Link のプラグインを使用しました。
アニメーションの動きの実装には GSAP を使用しています。

## 使用するプラグインのインストール

**Gatsby Plugin Transition Link** と **GSAP** をインストールします。
**AniLink**の使用には必ず**GSAP**が必要です。

```
npm i gatsby-plugin-transition-link gsap
```

インストールができたら gatsby-config.js に gatsby-plugin-transition-link を使用できるように記述する。

```
module.exports = {
    plugins: [
      `gatsby-plugin-transition-link`
    ]
];
```

以上で使用するための準備は完了しました。

## 実装

Gatsby Plugin Transition Link 自体には独自にページ遷移を実装するための機能が複数あります。<br>
その中でも見ている中で最も簡単に実装できるものが AniLink です。<br>
まずはページテンプレートへ AniLink を import します。

```
import AniLink from "gatsby-plugin-transition-link/AniLink";
```

AniLink では４パターンのページ遷移アニメーションが実装できます。
[gatsby-plugin-transition-link]: https://transitionlink.tylerbarnes.ca/docs/anilink/

- painDrop : クリックしたところから円のアニメーションが出現
- swipe : ページがサイドにスライドする
- cover : ページを完全に覆うように要素が被さる
- fade : フェードで切り替わる

## AniLink 使用時の注意点

**AniLink**のタグに対して **ClassName** などの属性を付与しないようにした方が良いです。
正常な動作をしない場合がありました。<br>
\(cover のアニメーション使用時に background の指定が反映されなくなるなど\)
