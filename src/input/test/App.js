import Button from "../button/Button";
import Form from "../form/Form";
import TextInput from "../textinput/TextInput";
import Fields from "../fields/Fields";
import FormException from "../exception/FormException";
import Field from "../field/Field";
import Label from "../label/Label";

export default function App() {
    const errorMessageStyle = {
        color: 'red',
        fontSize: '10px',
        textAlign: 'left',
    }

    function minLengthValidation(value) {
        let result = value.length > 3
        return result
    }

    function maxLengthValidation(value) {
        let result = value.length < 7
        return result
    }

    const minValidationObject = {
        errorMessage: 'Message too short',
        errorStyle: errorMessageStyle,
        validate(value) {
            return minLengthValidation(value)
        }
    }

    const maxValidationObject = {
        errorMessage: 'Message too long',
        errorStyle: errorMessageStyle,
        validate(value) {
            return maxLengthValidation(value)
        }
    }

    const errorStyle = {
        border: 'red solid 1px',
        color: 'red'
    }

    const buttonStyle = {
        backgroundColor: 'red',
        active: {

        }
    }

    function buttonFunc(params, test='test') {
        console.log(`First input = ${params.firstInput}, second input = ${params.secondInput}, third input = ${params.thirdInput}. test = ${test}`)
    }

    return(
        <Form errorStyle={errorStyle}>
            <Fields>
                <Field>
                    <Label text={'First label:'}/>
                    <TextInput type={'text'} placeholder={'First input placeholder'}   name={'firstInput'} validations={[minValidationObject, maxValidationObject]}/>
                </Field>
                <Field>
                    <Label text={'Second label:'}/>
                    <TextInput type={'text'} placeholder={'Second input placeholder'}  name={'secondInput'} validations={[minValidationObject, maxValidationObject]}/>
                </Field>
                <Field>
                    <Label text={'Third label:'}/>
                    <TextInput type={'text'} placeholder={'Third input placeholder'}  name={'thirdInput'} validations={[minValidationObject, maxValidationObject]}/>
                </Field>
            </Fields>
            <Button text={'Test'} buttonFunc={buttonFunc} name={'submitButton'} style={buttonStyle}/>
            <Button text={'Another function button'} buttonFunc={() => {throw new FormException("Test exception message")}} name={'anotherButton'}/>
        </Form>
    )
}