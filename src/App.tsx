import { useEffect, useRef, useState } from "react"
import { socket } from "./socket"

function App() {
    const messageTextInputRef = useRef<HTMLInputElement>(null)
    const [messageList, setMessageList] = useState<string[]>([])

    useEffect(() => {
        const onMsgToClient = (msg: string) => {
            receiveMessage(msg)
        }

        socket.on("msgToClient", onMsgToClient)

        return () => {
            socket.off("msgToClient", onMsgToClient)
        }
    }, [])

    const receiveMessage = (msg: string) => {
        setMessageList((prev) => [...prev, msg])
    }

    const sendMessage = () => {
        if (!messageTextInputRef.current) {
            return
        }
        const messageText = messageTextInputRef.current.value

        socket.emit("msgToServer", messageText)

        messageTextInputRef.current.value = ""
    }

    return (
        <>
            <h1>Chat app</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    sendMessage()
                }}
            >
                <input
                    type="text"
                    name="messageText"
                    id="messageText"
                    ref={messageTextInputRef}
                />
                <input
                    type="submit"
                    value="Send"
                />
            </form>
            <ul>
                {messageList.map((message) => (
                    <li>{message}</li>
                ))}
            </ul>
        </>
    )
}

export default App
