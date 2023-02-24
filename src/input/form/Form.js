import {useEffect, useState} from "react";
import {Context} from "../context/Context";

export default function Form(props) {
    const [startValidation, setStartValidation] = useState(false)
    const [validationProcess, setValidationProcess] = useState(true)
    const [values, setValues] = useState({})
    const [functions, setFunctions] = useState({})
    const [inputFieldsNumber, setInputFieldsNumber] = useState()
    const [isValidationEnded, setIsValidationEnded] = useState(false)
    const [currentFunctionName, setCurrentFunctionName] = useState("")

    let counter = 0
    let valuedProxy = {}
    let functionProxy = {}

    useEffect(() => {
        if(isValidationEnded && validationProcess) {
            functions[currentFunctionName](values)
            setIsValidationEnded(false)
            valuedProxy = {}
        } else {
            setValidationProcess(true)
            setIsValidationEnded(false)
        }
    }, [isValidationEnded])

    function addFunction(name, func) {
        functionProxy[name] = func

        setFunctions(functionProxy)
    }

    function addValue(name, value) {
        valuedProxy[name] = value

        setValues(valuedProxy)
    }

    function addValidationResult(result) {
        if(result) {
            setValidationProcess(!result)
        }

        if(counter < (inputFieldsNumber - 1)) {
            counter++
        } else {
            setStartValidation(false)
            setIsValidationEnded(true)
            counter = 1
        }
    }

    function onClickHandler(e) {
        if(e.details?.source === 'button') {
            setStartValidation(true)
            setCurrentFunctionName(e.details.name)
        }
    }


    return(
        <Context.Provider value={{setInputFieldsNumber, addValidationResult, startValidation, addValue, addFunction}}>
            <form onClick={e => onClickHandler(e)}>
                {props.children}
            </form>
        </Context.Provider>
    )
}