import { useEffect, useState } from "react"
import { ChatInfoDTO } from "../../dtos/ChatInfo.dto"
import { getUserChats } from "../../services/ChatService"

const ChatList: React.FC = () => {
    const [chatsInfos, setChatsInfos] = useState<ChatInfoDTO[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userChats = await getUserChats()
                setChatsInfos(userChats)
            } catch (error) {
                console.error((error as Error).message)
            }
        }
        fetchData()
    }, [])

    return (
        <div className="w-72">
            {/* Search bar */}
            <div className="flex items-center justify-around w-11/12 h-12 bg-secondary rounded-xl text-bright">
                <p>Search</p>
            </div>

            {/* Chats */}
            {chatsInfos?.map((chatInfo) => {
                return (
                    <div className="flex w-full h-fit p-3 hover:bg-secondary transition-all rounded-xl">
                        <div className="bg-blue-800 w-16 h-16 rounded-lg mr-3"></div>
                        <div className="flex flex-col pt-1 pb-2 justify-between">
                            <p>{chatInfo.chatName}</p>
                            <p className="text-bright">{chatInfo.lastMessage.content}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ChatList
