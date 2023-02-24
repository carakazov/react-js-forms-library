import {Fragment, useState} from "react";
import {useContext, useEffect} from "react";
import {Context} from "../context/Context";

export default function TextInput(props) {
    const {type, validations, placeholder, style, name} = props
    const {addValidationResult, startValidation, addValue} = useContext(Context)

    const [value, setValue] = useState("")
    const [errors, setErrors] = useState([])



    useEffect(() => {
        if(startValidation) {
            let errors = []
            for(let validation of validations) {
                if(!validation.validate(value)) {
                    errors.push(getErrorParagraph(validation.errorMessage, validation.errorStyle))
                }
            }
            setErrors(errors)
            let result = errors.length > 0
            addValidationResult(result)
            if(!result) {
                addValue(name, value)
            }
        }
    }, [startValidation])

    function getErrorParagraph(errorMessage, errorStyle) {
        return <p style={errorStyle}>{errorMessage}</p>
    }

    return (
        <Fragment>
            <input type={type} placeholder={placeholder} style={style} onClick={e => e.stopPropagation()} onChange={e => setValue(e.currentTarget.value)} />
            {errors}
        </Fragment>
    )
}