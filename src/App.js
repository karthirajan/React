import logo from './logo.svg';
import './App.css';
import FirstComponent from './Components/FirstComponent'
import SecondComponent, { ThirdComponent } from './Components/SecondComponent';
import CounterComponent from './Components/Counter/Counter';
import UncontrolledComponent from './Components/Learning/UncontrolledComponent';
import ControlledComponent from './Components/Learning/ControlledComponent';
import ListComponent from './Components/Learning/ListComponent';
import MountingComponent from './Components/Learning/MountingComponent';
import UpdatingComponent from './Components/Learning/UpdatingComponent copy';
import UnmountingComponent from './Components/Learning/UnmountingComponent';
import React, {useState} from 'react';
import LoginComponent from './Components/Todo/LoginComponent';
import WelcomeComponent from './Components/Todo/WelcomeComponent';
import TodoApp from './Components/Todo/TodoApp';

function App() {
  return (
    <div className="App">
      <TodoApp/>
    </div>
  );
}

function ColorComponent(){
  const [color, setColor] = useState('red');
  return (
    <div>
      <p>my favourite color is {color}</p>
      <button onClick={() => setColor('blue')}>click</button>
    </div>
  )
}

//function


//class component


export default App;
