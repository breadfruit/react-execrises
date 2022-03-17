import {  Input  } from 'antd';import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react';import useDebounce from './useDebounce';const { Search } = Input;function MyInput() {    const [value, setValue] = useState<string>();    const debouncedValue = useDebounce(value, { wait: 500 });    function FancyInput(props, ref) {        const inputRef =  useRef<HTMLInputElement>(null);        useImperativeHandle(ref, () => ({            focus: () => {                inputRef.current?.focus();            },            value: () => {                // @ts-ignore                inputRef.current?.value = '请输入'                console.log(inputRef.current)            }        }));        return (            <div>                <input                    ref = {inputRef}                    value={value}                    onChange={(e) => setValue(e.target.value)}                    placeholder="Typed value"                    style={{ width: 280 }}                />            </div>        )    }    // @ts-ignore    FancyInput = forwardRef(FancyInput);    const inputRef = useRef();    //进行初始化，只进行一次    useEffect(() =>{        // @ts-ignore        inputRef.current.value();    },[])    useEffect(() => {        console.log('useeffect')        // @ts-ignore        inputRef.current.focus();    }, [inputRef.current]);    return (        <div>            <div>focus</div>            <FancyInput                ref={inputRef}            />            <p style={{ marginTop: 16 }}>DebouncedValue: {debouncedValue}</p>        </div>    );}export default  MyInput;