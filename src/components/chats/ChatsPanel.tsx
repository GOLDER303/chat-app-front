import ChatBox from "./ChatBox"
import ChatList from "./ChatList"

const ChatsPanel: React.FC = () => {
    return (
        <div className="flex w-3/4 min-h-screen bg-primary rounded-2xl">
            <ChatList />
            <ChatBox />
        </div>
    )
}

export default ChatsPanel
