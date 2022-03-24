import {useState} from "react";const options = [{ label: 'Item One' , checked: false}, { label: 'Item Two' , checked: false}];interface optiosnProps {    label: string,    checked: boolean}interface MultiselectCheckboxProps {    options: optiosnProps[]    onChange: () => void}function MultiselectCheckbox<MultiselectCheckboxProps>({options, onChange }) {    const [data, setData] = useState(options);    const toggle = (index: number) => {        const newarr = [...data];        newarr.splice(index,  1, {            lable: data[index].lable,            checked: !data[index].checked        });        setData(newarr);        //自动执行传入的回调函数        onChange(newarr.filter(x => x.checked))    }    return(        <>            <label>                {                    data.map((item, index) => {                        <input                            readOnly                            type="checkbox"                            checked={item.checked || false}                            onClick={() => {toggle(index)}}                        />                    })                }            </label>        </>    )};export default MultiselectCheckbox;