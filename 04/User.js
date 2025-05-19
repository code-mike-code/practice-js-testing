export default class User {
    constructor( {email, password} ) {
        if (!this.isEmailValid(email)) {
            throw new Error('Invalid emil format')
        }

        this.email = email
        this.password = password
    }

    isEmailValid(email) {
        return email.includes('@')
    }

    getEmail() {
        return this.email
    }

    getPassword() {
        return this.password
    }
}