export default class User {
    constructor( {email, password} ) {
        if (!this.isEmailValid(email)) {
            throw new Error('Invalid emil format!')
        }
        if (!this.isPasswordValid(password)) {
            throw new Error('Password must be at least 6 characters long!')
        }

        this.email = email
        this.password = password
    }

    isPasswordValid(password) {
        return password.length >= 6
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