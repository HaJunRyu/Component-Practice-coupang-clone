import Icon from 'components/Icon/Icon';
import Input from 'components/Input/Input';
import React from 'react';
import {
  signInInput,
  iconWrapper,
  signInInputError,
  errorMessage
} from './SignInInput.module.scss';
import { string, bool } from 'prop-types';

export default function SignInInput({ type, state, visible, hasError, shape, className }) {
  const combineClass = `${signInInput} ${className} ${hasError ? signInInputError : null}`.trim();
  return (
    <div>
      <div className={combineClass}>
        <span className={iconWrapper}>
          <Icon shape={shape} />
        </span>
        <Input type={type} state={state} visible={visible} />
      </div>
      {hasError ? <em className={errorMessage}>비밀번호를 입력해주세요.</em> : null}
    </div>
  );
}

SignInInput.propTypes = {
  type: string.isRequired,
  state: string.isRequired,
  visible: bool,
  hasError: bool,
  shape: string.isRequired
};

SignInInput.defaultProps = {
  visible: false,
  hasError: false
};
