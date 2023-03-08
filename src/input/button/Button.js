import {useContext, useEffect, useState} from "react";
import {Context} from "../context/Context";
import createStyle from "../../functions/stylecreator/stylecretor";

export default function Button(props) {
    const {text, buttonFunc, name, style} = props
    const {addFunction} = useContext(Context)

    const styleClasses = createStyle(style)

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
        <button className={styleClasses().element} onClick={e => func(e)} type={'button'}>{text}</button>
    )
}