import React from 'react';
import SvgEnvelope from '../components/SvgEnvelope';
import SvgGithub from '../components/SvgGithub';
import SvgLink from '../components/SvgLink';
import SvgLinkedin from '../components/SvgLinkedin';
import ResumeMD from '../content/resume.md';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import css from '../styles/cv.module.css';

export default () => {
  return (
    <div className={css.container}>
      <Head>
        <title>Thomas O'Neill | CV</title>
      </Head>
      <header className={css.header}>
        <h1>Thomas O'Neill</h1>
        <ul id="social-links">
          <li><SvgLink /><a href="https://tom.bearjam.dev/cv">tom.bearjam.dev/cv</a></li>
          <li><SvgEnvelope /><a href="mailto:tom@bearjam.dev">tom@bearjam.dev</a></li>
          <li><SvgGithub /><a href="https://github.com/mysterybear">mysterybear</a></li>
          <li><SvgLinkedin /><a href="https://www.linkedin.com/in/tomatbearjam">linkedin.com/in/tomatbearjam</a></li>
        </ul>
        <p>
          React developer; systems engineer.
        </p>
        <p>
          Lover of the declarative, functional style;<br/>Unix philosophy; interactive learning.
        </p>
      </header>
      <article className={css.article}>
        <MDXProvider>
          <ResumeMD />
        </MDXProvider>
      </article>
    </div>
  );
}
