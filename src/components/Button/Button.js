import React from 'react';
import {
  button,
  primaryNormal,
  primaryDisabled,
  secondaryNormal,
  secondaryDisabled,
  notAllowed
} from './Button.module.scss';
import { node, string, bool } from 'prop-types';

export default function Button({ children, mode, disabled, state }) {
  const modeState = mode.toLowerCase() + state.toLowerCase();
  let modeStateClass = '';

  switch (modeState) {
    case 'primarynormal':
      modeStateClass = primaryNormal;
      break;
    case 'primarydisabled':
      modeStateClass = primaryDisabled;
      break;
    case 'secondarynormal':
      modeStateClass = secondaryNormal;
      break;
    case 'secondarydisabled':
      modeStateClass = secondaryDisabled;
      break;
    default:
      modeStateClass = '';
  }

  const combineClass = `${button} ${modeStateClass} ${disabled ? notAllowed : ''}`.trim();
  return (
    <button className={combineClass} disabled={disabled}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  mode: 'primary',
  state: 'normal',
  disabled: false
};

Button.propTypes = {
  children: node,
  mode: string.isRequired,
  state: string.isRequired,
  disabled: bool
};
