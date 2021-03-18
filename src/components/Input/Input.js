import Icon from 'components/Icon/Icon';
import React from 'react';
import { string, bool } from 'prop-types';
import { inputWraper, input, visibleImage } from './Input.module.scss';

export default function Input({ type, state, visible }) {
  const placeHolder = type === 'email' ? '아이디(이메일)' : '비밀번호';
  return (
    <div className={inputWraper}>
      <input className={input} placeholder={placeHolder} />
      {type === 'password' ? (
        <Icon className={visibleImage} shape={visible ? 'hide' : 'show'} />
      ) : null}
    </div>
  );
}

Input.defaultProps = {
  visible: false
};

Input.propTypes = {
  type: string.isRequired,
  state: string,
  visible: bool
};
