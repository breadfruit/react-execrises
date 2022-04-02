import React from 'react';
import Clock from "./components/clock/";
import Content from "./components/officialCase/useContext";
import Input from "./components/input/input"
import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      {/*<Clock />*/}
      <Content />
      <h3>==输入框==</h3>
      <Input
          onFocus={() => {
              console.log('focus')
          }}
      />
        <h3>可筛选表单</h3>
        <h2>redux练习</h2>

    </div>
  );
}

export default App;

