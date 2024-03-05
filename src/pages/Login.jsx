import { useContext } from "react"
import { AuthContext } from "../App"
import { Navigate } from "react-router-dom"

export default function Login() {
    const { auth, setAuth } = useContext(AuthContext)
    const result = auth === '1' ? (
        <Navigate to='/' />
    ) : (
        <div>
            <div>Login</div>
            <button onClick={() => setAuth('1')}>Log in as user</button>
        </div>
    )

    return (
        <>
            {result}
        </>
    )
}