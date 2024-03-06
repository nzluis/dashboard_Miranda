import { useContext, useState } from "react"
import { AuthContext } from "../App"
import { Navigate } from "react-router-dom"
import { LoginContainer } from '../style/LoginStyled'
import { ButtonActive } from "../style/Button"
import { Form } from '../style/Form'

export default function Login() {
    const { auth, setAuth } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState(false)
    const result = auth === '1' ? (
        <Navigate to='/dashboard' />
    ) : (
        <LoginContainer>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="email">Email:
                    <input

                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email@email.com"
                        type="email"
                        name="email"
                    />
                </label>
                <label htmlFor="password">Password:
                    <input
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        placeholder="your password..."
                        type="password"
                        name="password"
                    />
                </label>
                {error && <p>Incorrect Authentication: try again with 'admin@example.es' and 'admin' </p>}
                <ButtonActive>Log in</ButtonActive>
                <ButtonActive onClick={() => setAuth('1')}>Easy way login</ButtonActive>
            </Form>
        </LoginContainer>
    )

    function handleSubmit(e) {
        e.preventDefault()
        if (email === 'admin@example.es' && pass === 'admin') {
            setAuth('1')
            setEmail('')
            setPass('')
            setError(false)
        }
        else setError(true)
    }

    return (
        <>
            {result}
        </>
    )
}