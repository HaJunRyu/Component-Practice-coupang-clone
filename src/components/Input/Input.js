import Icon from 'components/Icon/Icon';
import React from 'react';
import { string, bool } from 'prop-types';
import { inputWraper, input, visibleImage } from './Input.module.scss';

export default function Input({ type, state, checkError, visible, setVisible, ...restProps }) {
  const placeHolder = type === 'email' ? '아이디(이메일)' : '비밀번호';

  const toggleVisible = () => {
    setVisible(!visible);
  };

  let inputType = null;

  if (type === 'email') inputType = type;
  else {
    inputType = visible ? 'text' : 'password';
  }

  return (
    <div className={inputWraper}>
      <input
        type={inputType}
        name={type}
        className={input}
        placeholder={placeHolder}
        onBlur={checkError}
        {...restProps}
      />
      {type === 'password' ? (
        <Icon
          className={visibleImage}
          shape={visible ? 'hide' : 'show'}
          toggleVisible={toggleVisible}
        />
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
