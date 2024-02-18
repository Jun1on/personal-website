import Head from 'next/head';
import React from 'react';

type MetaProps = {
  title: string;
  description: string;
  imageUrl?: string;
  timestamp?: string;
};

export function Meta({ title, description, imageUrl, timestamp }: MetaProps) {
  return (
    <Head>
      <title>Junion - {title}</title>
      <meta name="description" content={description} key="description" />
      <meta property="og:title" content={`Junion - ${title}`} key="title" />
      <meta property="og:description" content={description} key="ogdescription" />
      {imageUrl && <meta property="og:image" content={imageUrl} key="ogimage" />}
      {imageUrl && <meta name="twitter:image" content={imageUrl} key="twitterimage" />}
      {imageUrl && (
        <meta name="twitter:image:alt" content={`junion image`} key="twitteralt" />
      )}
      <meta name="twitter:site" content="@Jun1on" key="twittersite" />
      <meta
        property="twitter:card"
        content={imageUrl ? 'summary_large_image' : 'summary'}
        key="twittercard"
      />
      <meta name="twitter:title" content={title} key="twittertitle" />
      <meta name="twitter:description" content={description} key="twitterdescription" />
      {timestamp && <meta name="revised" content={timestamp} key="timestamp" />}
      <meta
        name="keywords"
        key="keywords"
        content="Ethereum, YouTube"
      />
      <link rel="apple-touch-icon" href="/junion_icon180.png" />
      <meta name="apple-mobile-web-app-title" content={`Aave`} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    </Head>
  );
}
