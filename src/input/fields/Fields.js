import {useContext, useEffect} from "react";
import {Context} from "../context/Context";
import createStyle from "../stylecreator/stylecretor";

export default function Fields(props) {
    const {setInputFieldsNumber} = useContext(Context)
    const {style} = props

    useEffect(() => {
        setInputFieldsNumber(props.children.length)
    }, [])

    return(
        <div style={createStyle(style).element}>
            {props.children}
        </div>
    )
}