import './App.css';
import checkedImg from '../assets/images/checked.svg';
import x from '../assets/images/x.svg';

import { useState } from 'react';
import { styled } from 'styled-components';

import Header from '../components/header';


function App() {
  const [activity, setActivity] = useState('');
  const [list, setList] = useState([{name: '', finished: false}]);

  const add = () => {
    let newList = [...list, {name: activity, finished: false}];
    setList(newList);

    setActivity('');
    newList = [];
  }

  const checked = (item) => {
      
  } 

  const exclude = (index) => {
    let newList = [...list];
    newList.splice(index, 1);

    setList(newList);
  }

  return (
    <div className='App'>
      <Header />
      <div className='content'>
        <div className='title_search'>
          <h1 id='title'>Lista de Tarefas</h1>

          <div className='input_add'>
            <input type="text" placeholder='O que vai fazer...'
              value={activity}
              onChange={(e) => setActivity(e.target.value)} />
            <button onClick={() => add()}>+</button>
          </div>
        </div>
        <div />
        <div className='list'>
          <ul>
            {list.map((item, index) =>
              item.name != '' ?
              <li key={index}>
                <p>{item.name}</p>
                <div className='buttons'>
                  <div onClick={() => checked(index)}>
                    <img src={checkedImg} alt="checked" />
                  </div>
                  <div onClick={() => exclude(index)}>
                    <img src={x} alt="x" />
                  </div>
                </div>
              </li>
              : null
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
