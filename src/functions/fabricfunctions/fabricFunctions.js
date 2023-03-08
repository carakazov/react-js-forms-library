import createStyle from "../stylecreator/stylecretor";

export function createValidationObject(message, errorStyle, validation) {
    let styleClasses = createStyle(errorStyle)

    return {
        errorMessage: message,
        errorStyle: styleClasses().element,
        validate(value) {
            return validation(value)
        }
    }
}