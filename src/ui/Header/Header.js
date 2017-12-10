import React from 'react';
import Link from 'gatsby-link';
import classnames from 'classnames';

import styles from './Header.module.scss';

const Header = ({ modifiers }) => (
  <header className={classnames(
    styles.header,
    modifiers,
  )}>
    <Link to="/" className="logo">
      <span className="logo__initial" aria-hidden="true">R</span>
      <span className="logo__effects" aria-hidden="true"></span>
      <span className="logo__party" aria-hidden="true"><img src="/assets/images/rowan-party.gif"/></span>
      <span className="sr-only">Rowan Weismiller</span>
    </Link>
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link link" href="/">Blog</a>
        </li>
        <li className="nav__item">
          <a className="nav__link link" href="/about/">About</a>
        </li>
      </ul>
    </nav>
    <div className="actions">
      <button className="button js-party-button">Party 🎉</button>
      <audio loop className="js-party-music" src="/assets/sounds/sandstorm.mp3" preload="none"></audio>
    </div>
  </header>
);

export default Header;
