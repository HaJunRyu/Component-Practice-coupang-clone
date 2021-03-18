import React from 'react';
import { string } from 'prop-types';

import { ReactComponent as Colorful } from 'assets/coupangLogos/logo-colorful.svg';
import { ReactComponent as Black } from 'assets/coupangLogos/logo-black.svg';
import { ReactComponent as Mono } from 'assets/coupangLogos/logo-mono.svg';

export default function Logo({ type }) {
  switch (type) {
    case 'color':
      return <Colorful />;
    case 'black':
      return <Black />;
    case 'mono':
      return <Mono />;
    default:
      return <Colorful />;
  }
}

Logo.defaultProps = {
  type: 'color'
};

Logo.propTypes = {
  type: string.isRequired
};
