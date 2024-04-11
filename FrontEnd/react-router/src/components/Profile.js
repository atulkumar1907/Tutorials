import { useAuth } from './auth.js'
import { useNavigate } from 'react-router-dom'

export function Profile(){
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = ()=>{
        auth.logout()
        navigate('/')
    }

    return (
        <div>
            <h2>{auth.user}</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}