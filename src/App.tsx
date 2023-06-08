import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ChatPage from "./pages/ChatPage"
import LoginPage from "./pages/LoginPage"

const router = createBrowserRouter([
    {
        path: "/chats/:id?",
        element: <ChatPage />,
        children: [],
    },
    {
        path: "/login",
        element: <LoginPage />,
        children: [],
    },
])

const App: React.FC = () => {
    return <RouterProvider router={router} />
}

export default App
