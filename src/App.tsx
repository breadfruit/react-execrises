import React from 'react';
import MyInput from "./components/input/";
import Clock from "./components/clock/"
import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <MyInput />
      <Clock />
    </div>
  );
}

export default App;
