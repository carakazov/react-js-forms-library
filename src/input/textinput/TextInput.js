import {useState} from "react";
import {useContext, useEffect} from "react";
import {Context} from "../context/Context";
import createStyle from "../../functions/stylecreator/stylecretor";

export function TextInput(props) {
    const {type, validations, placeholder, fieldStyle, blockStyle, name} = props
    const {addValidationResult, startValidation, addValue} = useContext(Context)

    const [value, setValue] = useState("")
    const [errors, setErrors] = useState([])

    const styleClasses = createStyle(fieldStyle)
    const divStyles = createStyle(blockStyle)

    useEffect(() => {
        if(startValidation) {
            let errors = []
            for(let validation of validations) {
                if(!validation.validate(value)) {
                    let index = errors.length
                    errors.push(getErrorParagraph(validation.errorMessage, validation.errorStyle, index))
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

    function getErrorParagraph(errorMessage, errorStyle, index) {
        return <p key={index} className={errorStyle}>{errorMessage}</p>
    }

    return (
        <div className={divStyles().element}>
            <input type={type} placeholder={placeholder} className={styleClasses().element} onClick={e => e.stopPropagation()} onChange={e => setValue(e.currentTarget.value)} />
            {errors}
        </div>
    )
}