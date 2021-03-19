import React from 'react';
import { copyright } from './Copyright.module.scss';

export default function Copyright({ children, className }) {
  const combineClass = `${copyright} ${className}`;
  return <small className={combineClass}>{children}</small>;
}
