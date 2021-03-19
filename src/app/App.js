import './App.scss';
import Logo from 'components/Logo/Logo';
import Icon from 'components/Icon/Icon';
import Button from 'components/Button/Button';
import Checkbox from 'components/Checkbox/Checkbox';
import Input from 'components/Input/Input';
import SignInInput from 'containers/SignInInput/SignInInput';
import Copyright from 'components/Copyright/Copyright';
import LoginPage from 'pages/LoginPage/LoginPage';

function App() {
  return (
    <>
      <LoginPage />
      {/* <Logo type='color' />
      <Logo type='mono' />
      <Logo type='black' />
      <Icon shape='letter' />
      <Icon shape='hide' />
      <Icon shape='show' />
      <Icon shape='lock' />
      <Button mode='primary' state='normal'>
        버튼
      </Button>
      <Button mode='primary' state='disabled'>
        버튼
      </Button>
      <Button mode='secondary' state='normal' disabled={true}>
        버튼
      </Button>
      <Button mode='secondary' state='disabled' disabled={true}>
        버튼
      </Button>
      <Checkbox id='autoLogin' checked={true}>
        자동 로그인
      </Checkbox>
      <Input type='email' />
      <Input type='password' />
      <SignInInput type='email' shape='message' />
      <SignInInput type='password' shape='lock' hasError={true} />
      <Copyright>ⓒCoupang Corp. All rights reserved.</Copyright> */}
    </>
  );
}

export default App;
