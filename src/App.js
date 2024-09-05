import React, { useState, useRef } from 'react';
import './App.css';
import { Auth } from './Componentes/auth';
import Cookies from 'universal-cookie';
import { Chat } from './Componentes/Chat.js';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config'

const cookies = new Cookies()

function App() {

  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  const [room, setRoom] = useState(null)
  const [isChatOpen, setIsChatOpen] = useState(false);

  const roomInputRef = useRef(null)

  const signUserOut = async () => {
    await signOut(auth)
    cookies.remove("auth-token")
    setIsAuth(false)
    setRoom(null)
    setIsChatOpen(false);
  }

  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  return (
    <div className='App'>
      {room ? (
        <Chat room={room} isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      ) : (
        <div className='room'>
          <label>Entre em uma sala</label>
          <input ref={roomInputRef} />
          <button onClick={() => {
            setRoom(roomInputRef.current.value);
            setIsChatOpen(true);
          }} className='btn'>
            Entrar na conversa
          </button>
        </div>
      )}
      <div className='sign-out'>
        <button onClick={signUserOut} className='btn btn-sign-out'>Deslogar</button>
      </div>
    </div>
  );
}

export default App;
