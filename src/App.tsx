import React from 'react';
import MyInput from "./components/input/";
import Clock from "./components/clock/";
import Content from "./components/officialCase/useContext";
import Ref from './components/officialCase/useRef'
import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <MyInput />
      <Clock />
      <Content />
      <Ref />
    </div>
  );
}

export default App;
