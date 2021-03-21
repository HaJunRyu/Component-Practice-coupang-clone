import Icon from 'components/Icon/Icon';
import Input from 'components/Input/Input';
import React, { useEffect } from 'react';
import {
  signInInput,
  iconWrapper,
  signInInputError,
  errorMessage as errorMessageStyle
} from './SignInInput.module.scss';
import { string, bool } from 'prop-types';

export default function SignInInput({
  type,
  state,
  visible,
  hasError: { hasError, errorMessage },
  setHasError,
  shape,
  className,
  ...restProps
}) {
  const checkError = ({ target: { name, value } }) => {
    const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    const error = name === 'email' ? 'emailHasError' : 'passwordHasError';
    let type = null;

    if (error === 'emailHasError') {
      if (!value.match(emailRegExp) && value !== '') type = 'emailFormat';
      else if (value === '') type = 'emailEmpty';
      else type = null;
    } else if (error === 'passwordHasError' && value === '') {
      type = 'passwordEmpty';
    } else type = null;

    setHasError({
      error,
      type
    });
  };

  const combineClass = `${signInInput} ${className} ${hasError ? signInInputError : null}`.trim();
  return (
    <div>
      <div className={combineClass}>
        <span className={iconWrapper}>
          <Icon shape={shape} />
        </span>
        <Input type={type} state={state} visible={visible} {...restProps} checkError={checkError} />
      </div>
      {hasError ? <em className={errorMessageStyle}>{errorMessage}</em> : null}
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
