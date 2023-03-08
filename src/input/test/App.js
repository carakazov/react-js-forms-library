import Form from "../form/Form";
import Fields from "../fields/Fields";
import Field from "../field/Field";
import Label from "../label/Label";
import TextInput from "../textinput/TextInput";
import Button from "../button/Button";
import {createValidationObject} from "../fabricfunctions/fabricFunctions";
import api from "./Api";
import FormException from "../exception/FormException";
import {
    button,
    errorFormStyle,
    fieldsStyle,
    fieldStyle,
    formStyle, formWholeDivStyle,
    inputDivStyle,
    label,
    textInput,
    validationError
} from "./styles";

export default function App() {

    function notEmptyValidation(value) {
        return value.length > 0
    }

    function throwError() {
        throw new FormException('Test throw')
    }

    async function callApiFunc(params) {
        await api.login(params.login, params.password)
            .then(result => console.log(result))
            .catch(reject => {throw new FormException(reject)})
    }

    const notEmptyValidationErrorMessage = 'Required field'

    return(
        <Form style={formStyle} errorStyle={errorFormStyle} divStyle={formWholeDivStyle}>
            <Fields style={fieldsStyle}>
                <Field style={fieldStyle}>
                    <Label text={'Login:'} style={label}/>
                    <TextInput name={'login'} placeholder={'example@mail.ru'} type={'text'} fieldStyle={textInput} blockStyle={inputDivStyle} validations={
                        [createValidationObject(notEmptyValidationErrorMessage, validationError, notEmptyValidation)]
                    }/>
                </Field>
                <Field style={fieldStyle}>
                    <Label text={'Password:'} style={label}/>
                    <TextInput name={'password'} placeholder={'qwerty'} type={'password'} fieldStyle={textInput} blockStyle={inputDivStyle} validations={
                        [createValidationObject(notEmptyValidationErrorMessage, validationError, notEmptyValidation)]
                    }/>
                </Field>
            </Fields>
            <Button name={'loginButton'} text={'Log In'} buttonFunc={callApiFunc} style={button}/>
        </Form>
    )
}