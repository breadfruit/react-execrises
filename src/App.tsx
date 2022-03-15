import React from 'react';
import MyInput from "./components/input/";
import Clock from "./components/clock/";
import Content from "./components/officialCase/useContext";

import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <MyInput />
      <Clock />
      <Content />
    </div>
  );
}

export default App;
