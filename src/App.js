import logo from './logo.svg';
import './App.css';
import ExampleReactBootstrap from './slot2/ExampleReactBootstrap';
import BasicExample from './slot2/DropDownEx';
import NavBar from './slot2/NavBar';
import Hello from './slot2/DemoProps';
import StateDemo from './slot2/StateDemo';
import StateDemo1 from './slot2/StateDemo1';
import DemoState2 from './slot2/DemoState2';
import { useState } from 'react';
import { DemoClass } from './slot2/DemoClass';
import DemoWeb from './slot4/DemoWeb';

function App() {
  const hanldeClick = (name) => {
    window.alert(`hello ${name}`);
  }
  const [users, setUsers] = useState([
    {
      name: 'Nguyen Van An',
      age: 20,
      address: 'Ha Noi'
    },
    {
      name: 'Tran Thi Binh',
      age: 21,
      address: 'Da Nang'
    }
  ])
  const addUser = (name, age, address) => {
    setUsers((prev) => [...prev, { name, age, address }])
  }
  return (
    <div>
      {/* <ExampleReactBootstrap />
      <BasicExample />
      <NavBar />
      <Hello users={users} handleClick={hanldeClick} />
      <StateDemo />
      <StateDemo1 />
      <DemoState2 addUser={addUser} />
      <DemoClass /> */}
      <DemoWeb />
    </div>
  );
}

export default App;
