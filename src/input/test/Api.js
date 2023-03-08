import FormException from "../exception/FormException";

class Api {
    async login(login, password) {
        return Promise.reject('Incorrect credentials')
        /*
        let response = await fetch('http://localhost:8080/auth', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                login: login,
                password: password
            })
        })
        if(response.ok) {
            let json = await response.json()
            return json.token
        } else {
            return Promise.reject('Incorrect credentials')
        }

         */
    }
}

const api = new Api()
export default api