import React from 'react';
import classnames from 'classnames';

import LinkList from '../LinkList/LinkList';

import styles from './Footer.module.scss';

const local = {
  header: 'Browse Around',
  links: [
    {
      url: '/',
      text: 'Blog',
    },
    {
      url: '/about/',
      text: 'About',
    },
  ],
};

const outside = {
  header: 'Around The Internets',
  links: [
    {
      url: 'https://github.com/rowbot-weisguy',
      text: 'GitHub',
    },
    {
      url: 'https://twitter.com/rowbot_weisguy',
      text: 'Twitter',
    },
    {
      url: 'https://ca.linkedin.com/in/rowanweismiller',
      text: 'LinkedIn',
    },
  ],
};

const Footer = ({ modifiers }) => (
  <footer className={classnames(styles.footer, modifiers)}>
    <LinkList header={local.header} links={local.links} horizontal="true" />
    <LinkList header={outside.header} links={outside.links} horizontal="true" />
    <p className={classnames(styles.fineprint, 'js-super-party-button')}>
      Powered by nachos in Vancouver, Canada
    </p>
  </footer>
);

export default Footer;
