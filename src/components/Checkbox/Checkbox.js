import React from 'react';
import { checkbox, checkboxWraper, checkboxImageWraper, label } from './Checkbox.module.scss';
import { ReactComponent as CheckedSVG } from 'assets/icons/checked.svg';

export default function Checkbox({ checked, id, children }) {
  return (
    <div className={checkboxWraper}>
      <span className={checkboxImageWraper}>{checked ? <CheckedSVG /> : null}</span>
      <input className={checkbox} type='checkbox' id={id} />
      <label className={label} htmlFor={id}>
        {children}
      </label>
    </div>
  );
}
