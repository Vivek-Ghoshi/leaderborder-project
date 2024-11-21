// src/components/LoginPage.jsx
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
    const { login } = useAuth();
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        // Replace with actual login API request
        const response = await fetch('http://localhost:7000/api/auth/v1/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        if (data.user) login(data.user);
    };

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center bg-zinc-800'>
            <h2 className='font-extrabold text-blue-400 text-3xl mb-4'>Login User</h2>
        <form onSubmit={handleLogin} className="w-[35%] p-4 flex flex-col gap-3 px-9 py-9 rounded-xl border-blue-300 border-2">
            <input className='bg-transparent border px-3 py-2 rounded-md outline-none border-zinc-300 text-white' type="username" value={username} onChange={(e) => setusername(e.target.value)} placeholder="username" />
            <input className='bg-transparent border px-3 py-2 rounded-md outline-none border-zinc-300 text-white' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button className='bg-blue-400 py-3 rounded-2xl text-white font-semibold' type="submit">Login</button>
        </form>
        </div>
    );
};

export default LoginPage;
