import { MessageInfoDTO } from "./MessageInfo.dto"
import { UserInfoDTO } from "./UserInfo.dto"

export interface ChatInfoDTO {
    id: number
    chatName: string
    lastMessage: MessageInfoDTO
    users: UserInfoDTO[]
}
