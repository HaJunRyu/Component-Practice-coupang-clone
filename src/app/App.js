import './App.scss';
import Logo from 'components/Logo/Logo';
import Icon from 'components/Icon/Icon';
import Button from 'components/Button/Button';
import Checkbox from 'components/Checkbox/Checkbox';
import Input from 'components/Input/Input';

function App() {
  return (
    <>
      <Logo type='color' />
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
    </>
  );
}

export default App;
