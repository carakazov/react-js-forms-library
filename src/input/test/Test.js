import {useState} from "react";

export default function Test() {
    const [obj, setObj] = useState({})

    function addFirst() {
        let newObj = {
            ...obj,
            first: 'test'
        }

        setObj(newObj)
    }

    function addSecond() {
        let newObj = {
            ...obj,
            second: 'test'
        }

        setObj(newObj)
    }

    return(
        <div>
            <button type={'button'} onClick={addFirst}>Add first</button>
            <button type={'button'} onClick={addSecond}>Add second</button>
            <p>{obj.first}</p>
            <p>{obj.second}</p>
        </div>
    )
}