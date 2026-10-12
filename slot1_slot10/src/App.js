import logo from "./logo.svg";
import "./App.css";
import ExampleReactBootstrap from "./slot2/ExampleReactBootstrap";
import BasicExample from "./slot2/DropDownEx";
import NavBar from "./slot2/NavBar";
import Hello from "./slot2/DemoProps";
import StateDemo from "./slot2/StateDemo";
import StateDemo1 from "./slot2/StateDemo1";
import DemoState2 from "./slot2/DemoState2";
import { useState } from "react";
import { DemoClass } from "./slot2/DemoClass";
import DemoWeb from "./slot4/DemoWeb";
import EventHandlingDemo from "./slot10/EX16";
import RenderAndCommitDemo from "./slot10/EX17";
import SnapshotDemo from "./slot10/EX18";
import EX19 from "./slot10/EX19";

function App() {
  const hanldeClick = (name) => {
    window.alert(`hello ${name}`);
  };
  const [users, setUsers] = useState([
    {
      name: "Nguyen Van An",
      age: 20,
      address: "Ha Noi",
    },
    {
      name: "Tran Thi Binh",
      age: 21,
      address: "Da Nang",
    },
  ]);
  const addUser = (name, age, address) => {
    setUsers((prev) => [...prev, { name, age, address }]);
  };
  return (
    <div className="container">
      <EventHandlingDemo />
      <SnapshotDemo />
      <EX19 />
    </div>
  );
}

export default App;
