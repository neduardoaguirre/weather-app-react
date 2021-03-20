import React from 'react';

const Header = ({ title }) => {
  return (
    <nav>
      <div className="nav-wrapper grey">
        <a href="#!" className="brand-logo black-text">
          {title}
        </a>
      </div>
    </nav>
  );
};

export default Header;
