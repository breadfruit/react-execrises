import React from 'react';
import MyInput from "./components/input/";
import Clock from "./components/clock/";
import Content from "./components/officialCase/useContext";
import Input from "./components/input/input"
import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Clock />
      <Content />
      <h3>==输入框==</h3>
      <Input />
    </div>
  );
}

export default App;

