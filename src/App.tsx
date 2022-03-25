import React from 'react';
import Clock from "./components/clock/";
import Content from "./components/officialCase/useContext";
import Input from "./components/input/input"
import './App.css';
import 'antd/dist/antd.css';
import FilterTable from './components/filterTable'
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
        <FilterTable></FilterTable>
        <h2>redux练习</h2>

    </div>
  );
}

export default App;

