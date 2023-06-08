import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import UnauthorizedError from "../errors/UnauthorizedError"
import { login } from "../services/AuthService"

const LoginPage: React.FC = () => {
    const navigate = useNavigate()

    const [errorMessage, setErrorMessage] = useState<string>("")

    const usernameInputRef = useRef<HTMLInputElement>(null)
    const passwordInputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = async () => {
        if (!usernameInputRef.current || !passwordInputRef.current) {
            return
        }
        try {
            await login(usernameInputRef.current.value, passwordInputRef.current.value)
            navigate("/chats")
        } catch (error) {
            if (error instanceof UnauthorizedError) {
                setErrorMessage("You entered wrong credentials")
            } else {
                setErrorMessage((error as Error).message)
            }
        }
    }

    return (
        <>
            <form
                onSubmit={(event) => {
                    event.preventDefault()
                    handleSubmit()
                }}
            >
                <label htmlFor="email">Email: </label>
                <input
                    ref={usernameInputRef}
                    type="email"
                    name="email"
                    id="email"
                />
                <br />
                <label htmlFor="password">Password: </label>
                <input
                    ref={passwordInputRef}
                    type="password"
                    name="password"
                    id="password"
                />
                <br />
                <input
                    type="submit"
                    value="Login"
                />
            </form>
            {errorMessage && <p>{errorMessage}</p>}
        </>
    )
}

export default LoginPage
