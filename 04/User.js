export default class User {
    constructor( {email, password} ) {
        if (!this.isEmailValid(email)) {
            throw new Error('Invalid email format!')
        }
        if (!this.isPasswordValid(password)) {
            throw new Error('Password must be at least 6 characters long!')
        }

        this.email = email
        this.password = password
    }
    isPasswordValid(password) {
        const minLength = 6
        const hasMinLength = password.length >= minLength
        const hasLetter = /[a-zA-Z]/.test(password)
        const hasNumber = /\d/.test(password)

        return hasMinLength && hasLetter && hasNumber
    }
    isEmailValid(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        return emailRegex.test(email)
    }
    getEmail() {
        return this.email
    }
    getPassword() {
        return this.password
    }
    login() {
        const validEmailDomain = 'devmentor.pl'
        return this.email.endsWith(validEmailDomain)
    }
}