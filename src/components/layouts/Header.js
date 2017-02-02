import React from 'react';
import Link from 'components/elements/Link';

const Header = () => (
    <header className="header">
      <h1>
        <Link
         className="link link_white"
         to='/'
        >TBlog</ Link>
      </h1>
    </header>
);

export default Header;
