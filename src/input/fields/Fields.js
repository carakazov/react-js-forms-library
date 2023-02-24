import {useContext, useEffect} from "react";
import {Context} from "../context/Context";

export default function Fields(props) {
    const {setInputFieldsNumber} = useContext(Context)

    useEffect(() => {
        setInputFieldsNumber(props.children.length)
    }, [])

    return(
        <div>
            {props.children}
        </div>
    )
}