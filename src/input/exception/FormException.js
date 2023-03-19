
export class FormException extends Error {
    constructor(message) {
        super();
        this.message = message
    }

    getMessage() {
        return this.message
    }
}