import {Fragment, useState} from "react";
import {useContext, useEffect} from "react";
import {Context} from "../context/Context";
import createStyle from "../stylecreator/stylecretor";

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
        return <p style={createStyle(errorStyle).element}>{errorMessage}</p>
    }

    return (
        <Fragment>
            <input type={type} placeholder={placeholder} style={createStyle(style).element} onClick={e => e.stopPropagation()} onChange={e => setValue(e.currentTarget.value)} />
            {errors}
        </Fragment>
    )
}