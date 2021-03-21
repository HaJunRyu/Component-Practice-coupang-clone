import React, { useReducer, useState } from 'react';
import useInputs from 'hooks/useInputs';
import Anchor from 'components/Anchor/Anchor';
import Button from 'components/Button/Button';
import Checkbox from 'components/Checkbox/Checkbox';
import Copyright from 'components/Copyright/Copyright';
import DivisionLine from 'components/DivisionLine/DivisionLine';
import Logo from 'components/Logo/Logo';
import SignInInput from 'containers/SignInInput/SignInInput';
import {
  loginPage,
  logo,
  signInInput,
  autoLoginFindIdWrapper,
  divisionLine,
  copyright
} from './LoginPage.module.scss';

function reducer(state, action) {
  let hasError = true;
  let errorMessage = '';
  switch (action.type) {
    case 'emailEmpty':
      errorMessage = '아이디(이메일)를 입력해주세요.';
      break;
    case 'emailFormat':
      errorMessage = '아이디(이메일)는 이메일 형식으로 입력해주세요.';
      break;
    case 'passwordEmpty':
      errorMessage = '비밀번호를 입력해주세요.';
      break;
    default:
      hasError = false;
      errorMessage = '';
  }

  return {
    ...state,
    [action.error]: {
      hasError,
      errorMessage
    }
  };
}

export default function LoginPage() {
  const [inputs, setInputs] = useInputs({
    email: '',
    password: ''
  });

  const { email, password } = inputs;

  const [visible, setVisible] = useState(false);

  const [hasError, setHasError] = useReducer(reducer, {
    emailHasError: { hasError: false, errorMessage: '' },
    passwordHasError: { hasError: false, errorMessage: '' }
  });

  const { emailHasError, passwordHasError } = hasError;

  const [checked, setChecked] = useState(false);

  return (
    <div className={loginPage}>
      <Logo type='color' className={logo} />
      <SignInInput
        type='email'
        shape='letter'
        className={signInInput}
        value={email}
        onChange={setInputs}
        hasError={emailHasError}
        setHasError={setHasError}
      />
      <SignInInput
        type='password'
        shape='lock'
        className={signInInput}
        value={password}
        onChange={setInputs}
        visible={visible}
        setVisible={setVisible}
        hasError={passwordHasError}
        setHasError={setHasError}
      />
      <div className={autoLoginFindIdWrapper}>
        <Checkbox checked={false} id='autoLogin' checked={checked} setChecked={setChecked}>
          자동로그인
        </Checkbox>
        <Anchor href='#' style={{ color: '#0074E9' }}>
          아이디(이메일)/비밀번호 찾기 &gt;
        </Anchor>
      </div>
      <Button mode='primary' state='normal'>
        로그인
      </Button>
      <DivisionLine className={divisionLine} />
      <Button mode='secondary' state='normal'>
        회원가입
      </Button>
      <Copyright className={copyright}>ⓒCoupang Corp. All rights reserved.</Copyright>
    </div>
  );
}
