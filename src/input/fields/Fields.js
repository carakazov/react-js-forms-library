import {useContext, useEffect} from "react";
import {Context} from "../context/Context";
import createStyle from "../stylecreator/stylecretor";

export default function Fields(props) {
    const {setInputFieldsNumber} = useContext(Context)
    const {style} = props

    const styleClasses = createStyle(style)

    useEffect(() => {
        setInputFieldsNumber(props.children.length)
    }, [])

    return(
        <div className={styleClasses().element}>
            {props.children}
        </div>
    )
}