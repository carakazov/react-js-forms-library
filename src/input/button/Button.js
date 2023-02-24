import {useContext, useEffect, useState} from "react";
import {Context} from "../context/Context";

export default function Button(props) {
    const {text, buttonFunc, name} = props
    const {addFunction} = useContext(Context)

    useEffect(() => {
        addFunction(name, buttonFunc)
    }, [])

    function func(e) {
        e.details = {
            source: 'button',
            name: name
        }
    }

    return(
        <button onClick={e => func(e)} type={'button'}>{text}</button>
    )
}