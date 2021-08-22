---
title: 'microCMSのAPIから返ってきた日付がズレる'
tags: [GatsbyJS, microCMS, memorandum]
image: img/soucecodeIMGL9025_TP_V.jpg
date: '2021-08-11T10:00:00.000Z'
draft: false
excerpt: microCMSのAPIから返却されてきた日付をそのまま表示させていたら日付がズレていたのでその修正を行なったのと備忘録。
---

## microCMS の API から返却されている日付データは UTC で返却されている

管理画面上だと日本時間で表示されているため何も考えずにそのまま処理してしまっていたのが今回の原因でした。<br />
確認不足だなぁ・・・。

## 対応方法

microCMS の公式ドキュメントの対応方法を参考にしました。<br />
[参考記事]: https://document.microcms.io/faq/pa2gfm7xf

上記を見れば問題ないとは思いますが、念の為に対応方法を下記にも残しておきます。

### npm にて dayjs をインストール。

```
npm i dayjs
```

### dayJS の各プラグインの準備

```
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
```

### 利用しているテンプレート上で変換

```
dayjs.utc(publishedAt).tz('Asia/Tokyo').format('YYYY-MM-DD')
```
