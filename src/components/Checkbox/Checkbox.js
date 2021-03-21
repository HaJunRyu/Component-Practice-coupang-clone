import React from 'react';
import { checkbox, checkboxWraper, checkboxImageWraper, label } from './Checkbox.module.scss';
import { ReactComponent as CheckedSVG } from 'assets/icons/checked.svg';

export default function Checkbox({ checked, setChecked, id, children }) {
  const checkedHandler = () => {
    setChecked(!checked);
  };
  return (
    <div className={checkboxWraper}>
      <span className={checkboxImageWraper}>{checked ? <CheckedSVG /> : null}</span>
      <input
        className={checkbox}
        checked={checked}
        type='checkbox'
        id={id}
        onChange={checkedHandler}
      />
      <label className={label} htmlFor={id}>
        {children}
      </label>
    </div>
  );
}
