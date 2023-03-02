import {useContext, useEffect, useState} from "react";
import {Context} from "../context/Context";
import createStyle from "../stylecreator/stylecretor";

export default function Button(props) {
    const {text, buttonFunc, name, style} = props
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
        <button style={createStyle(style).element} onClick={e => func(e)} type={'button'}>{text}</button>
    )
}