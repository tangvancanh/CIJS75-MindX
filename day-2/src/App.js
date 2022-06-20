import './App.css';
import Title from './components/Title/Title';
import Button from './components/Button/Button';
import Section from './components/Section/Section';

const App = () => {
  return <div>
    <Button button='save' />
    <Button button='cancel' />
    <Button button='renting' />
    <Button button='buy' />
    <Button button='set auction' />
    <Title text='text-1' />
    <Title text='text-2' />
    <Title text='text-3' />
    <Title text='text-4' />
    <Title text='text-5' />
    <Section h1='Tiêu đề-1' p = 'một đoạn text dài dài dài' img = "https://cdn.nguyenkimmall.com/images/detailed/555/may-anh-cho-nguoi-moi.jpg"/>
    <Section h1='Tiêu đề-2' p = 'một đoạn text dài dài dài' img = "https://cdn.nguyenkimmall.com/images/detailed/555/may-anh-cho-nguoi-moi.jpg"/>
    <Section h1='Tiêu đề-3' p = 'một đoạn text dài dài dài' img = "https://cdn.nguyenkimmall.com/images/detailed/555/may-anh-cho-nguoi-moi.jpg"/>
    <Section h1='Tiêu đề-4' p = 'một đoạn text dài dài dài' img = "https://cdn.nguyenkimmall.com/images/detailed/555/may-anh-cho-nguoi-moi.jpg"/>
  </div>
};

export default App;
