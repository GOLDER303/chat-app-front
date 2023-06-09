import axios, { AxiosError, AxiosResponse } from "axios"
import { ChatInfoDTO } from "../dtos/ChatInfo.dto"
import { refreshTokens } from "./AuthService"

export const getUserChats = async (): Promise<ChatInfoDTO[]> => {
    try {
        const response: AxiosResponse<ChatInfoDTO[]> = await axios.get("http://localhost:3000/chats", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
        })

        return response.data
    } catch (err) {
        if (!(err instanceof AxiosError)) throw new Error("Something went wrong")

        const error = err as AxiosError

        const status = error.response?.status

        if (status === 401) {
            try {
                await refreshTokens()
                return getUserChats()
            } catch (refreshError) {
                if (refreshError instanceof Error) {
                    throw new Error(refreshError.message)
                } else {
                    throw new Error("Failed to refresh JWT token")
                }
            }
        }

        throw new Error("Something went wrong")
    }
}
