import React, {useState, useEffect} from 'react';import useTimeout from "./useTimeout";function Clock() {    const [state, setState] = useState(1);    const [hours, setHours] = useState('');    const [mins, setMins] = useState('');    const [seconds, setSeconds] = useState('');    const formcat = function () {        //将秒换成时分秒        let temphours = state / 3600;        let tempmins = state / 60;        let tempseonds = state % 60;        setHours(temphours <= 1 ? '00' : temphours.toString());        setMins(tempmins <= 1 ? '00' : tempmins.toString());        setSeconds(tempseonds <= 1 ? '00' : tempseonds.toString());    };    useEffect(() => {        useTimeout(() => {            setState(state + 1);            formcat();        }, 1000);    });    return (        <div>            {hours} : {mins}: {seconds}        </div>    )};export default Clock;