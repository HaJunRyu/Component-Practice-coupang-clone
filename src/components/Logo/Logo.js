import React from 'react';
import { logo } from './Logo.module.scss';
import { string } from 'prop-types';

import { ReactComponent as Colorful } from 'assets/coupangLogos/logo-colorful.svg';
import { ReactComponent as Black } from 'assets/coupangLogos/logo-black.svg';
import { ReactComponent as Mono } from 'assets/coupangLogos/logo-mono.svg';

export default function Logo({ type, className }) {
  const combineClass = `${logo} ${className}`.trim();
  switch (type) {
    case 'color':
      return <Colorful className={combineClass} />;
    case 'black':
      return <Black className={logo} />;
    case 'mono':
      return <Mono className={logo} />;
    default:
      return <Colorful className={logo} />;
  }
}

Logo.defaultProps = {
  type: 'color'
};

Logo.propTypes = {
  type: string.isRequired
};
