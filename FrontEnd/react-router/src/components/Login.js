import {useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import {useAuth} from './auth'

export const Login=()=>{

    const [user, setUser] = useState("")
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const redirect = location.state?.path || '/'

    const HandleLogin=()=>{
        auth.login(user)
        navigate(redirect, {replace: true})
    }
    return (
        <div>
            <label>
                Username: <input type='text' onChange={(e)=>setUser(e.target.value)} />
            </label>
            <button onClick={HandleLogin}>LogIn</button>
        </div>
    )
}