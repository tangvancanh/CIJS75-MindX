import './App.css';
import { useState, useEffect } from 'react';
import Ex1 from './components/Ex1';
import Ex2 from './components/Ex2';
import Ex3 from './components/Ex3';

function App() {

  return (
    <div className='content'>
      <h1>Bai 1</h1>
      <Ex1 />
      <h1>Bai 2</h1>
      <Ex2 />
      <h1>Bai 3</h1>
      <Ex3 />
    </div>
  );
}

export default App;
