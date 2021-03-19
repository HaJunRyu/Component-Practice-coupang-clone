import React from 'react';
import { a } from './Anchor.module.scss';

export default function Anchor({ href, children, ...restProps }) {
  return (
    <a className={a} href={href} {...restProps}>
      {children}
    </a>
  );
}
