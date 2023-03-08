import FormException from "../exception/FormException";

export default function Test() {

    async function fail() {
        return Promise.reject()
    }

    async function test() {
        try {
            await fail().catch(() => {throw new FormException('test')})
        } catch (exception) {
            console.log(exception.getMessage())
        }
    }


    return(
        <button onClick={test}>test</button>
    )
}