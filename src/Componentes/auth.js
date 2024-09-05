import { auth, provider } from '../firebase-config.js';
import { signInWithPopup } from 'firebase/auth'
import Cookies from 'universal-cookie';
import '../styles/Auth.css'

const cookies = new Cookies()

export const Auth = (props) => {
    const { setIsAuth } = props

    const signWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            cookies.set("auth-token", result.user.refreshToken);
            setIsAuth(true)
        } catch (err) {
            console.err(err)
        }
    }

    return (
        <div className='container login'>
            <div className="auth">
                <p>Login com o Google para continuar</p>
                <button onClick={signWithGoogle} className='btn'>Login com o Google</button>
            </div>
        </div>
    )
}