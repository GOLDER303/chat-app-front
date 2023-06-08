import axios, { AxiosError } from "axios"
import UnauthorizedError from "../errors/UnauthorizedError"

export const login = async (email: string, password: string): Promise<void> => {
    try {
        const response = await axios.post("http://localhost:3000/auth/signIn", {
            email,
            password,
        })

        localStorage.setItem("jwt", response.data.accessToken)
        localStorage.setItem("jwt_refresh", response.data.refreshToken)
    } catch (err) {
        const error = err as AxiosError

        const status = error.response?.status

        if (status === 401) {
            throw new UnauthorizedError()
        }

        throw new Error("Something went wrong")
    }
}
