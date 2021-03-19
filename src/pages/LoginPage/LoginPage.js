import Anchor from 'components/Anchor/Anchor';
import Button from 'components/Button/Button';
import Checkbox from 'components/Checkbox/Checkbox';
import Copyright from 'components/Copyright/Copyright';
import DivisionLine from 'components/DivisionLine/DivisionLine';
import Logo from 'components/Logo/Logo';
import SignInInput from 'containers/SignInInput/SignInInput';
import React from 'react';
import {
  loginPage,
  logo,
  signInInput,
  autoLoginFindIdWrapper,
  divisionLine,
  copyright
} from './LoginPage.module.scss';

export default function LoginPage() {
  return (
    <div className={loginPage}>
      <Logo type='color' className={logo} />
      <SignInInput type='email' shape='letter' className={signInInput} />
      <SignInInput type='password' shape='lock' className={signInInput} />
      <div className={autoLoginFindIdWrapper}>
        <Checkbox checked={false} id='autoLogin'>
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
