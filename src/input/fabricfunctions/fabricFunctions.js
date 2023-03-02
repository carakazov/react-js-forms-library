export function createValidationObject(message, errorStyle, validation) {
    return {
        errorMessage: message,
        errorStyle: errorStyle,
        validate(value) {
            return validation(value)
        }
    }
}