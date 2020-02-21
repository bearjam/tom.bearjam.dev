import React from 'react';
import DrawSoundMD from '../content/draw-sound.md';
import css from '../styles/cv.module.css';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';

export default () => {
  return (
    <div className={css.container}>
      <Head>
        <title>Thomas O'Neill | Sound Drawing Experiment</title>
      </Head>
      <article className={css.article}>
        <MDXProvider>
          <DrawSoundMD />
        </MDXProvider>
      </article>
    </div>
  );
}
