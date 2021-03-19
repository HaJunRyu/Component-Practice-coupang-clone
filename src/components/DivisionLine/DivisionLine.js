import React from 'react';
import { divisionLine } from './DivisionLine.module.scss';

export default function DivisionLine({ className }) {
  const combineClass = `${divisionLine} ${className}`;
  return <span className={combineClass}></span>;
}
