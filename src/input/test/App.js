import Button from "../button/Button";
import Form from "../form/Form";
import TextInput from "../textinput/TextInput";
import Fields from "../fields/Fields";

export default function App() {
    const errorMessageStyle = {
        color: 'red',
        fontSize: '10px',
        textAlign: 'left'
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
        errorMessage: 'Message to short',
        errorStyle: errorMessageStyle,
        validate(value) {
            return minLengthValidation(value)
        }
    }

    const maxValidationObject = {
        errorMessage: 'Message to long',
        errorStyle: errorMessageStyle,
        validate(value) {
            return maxLengthValidation(value)
        }
    }

    function buttonFunc(params, test='test') {
        console.log(`First input = ${params.firstInput}, second input = ${params.secondInput}, third input = ${params.thirdInput}. test = ${test}`)
    }

    return(
        <Form>
            <Fields>
                <TextInput type={'text'} placeholder={'First input placeholder'}   name={'firstInput'} validations={[minValidationObject, maxValidationObject]}/>
                <TextInput type={'text'} placeholder={'Second input placeholder'}  name={'secondInput'} validations={[minValidationObject, maxValidationObject]}/>
                <TextInput type={'text'} placeholder={'Second input placeholder'}  name={'thirdInput'} validations={[minValidationObject, maxValidationObject]}/>
            </Fields>
            <Button text={'Test'} buttonFunc={buttonFunc} name={'submitButton'}/>
            <Button text={'Another function button'} buttonFunc={() => alert('Another button')} name={'anotherButton'}/>
        </Form>
    )
}