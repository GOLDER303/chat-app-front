export default class UnauthorizedError extends Error {
    constructor()
    constructor(message: string)
    constructor(message?: string) {
        super(message)
        this.name = "UnauthorizedError"
    }
}
