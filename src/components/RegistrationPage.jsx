// src/components/RegistrationPage.jsx
import { useState } from 'react';

const RegistrationPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [username, setusername] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:7000/api/auth/v1/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstName,lastName,username,email, password }),
           
        });
        
    };
  
    return (
        <div className='w-screen h-screen bg-zinc-800 flex items-center justify-center flex-col'>
            <h2 className='font-extrabold text-blue-400 text-3xl mb-4'>Register User</h2>
        <form onSubmit={handleRegister} className="w-[35%] p-4 flex flex-col gap-3 px-9 py-9 rounded-xl border-blue-300 border-2">
            <input className='bg-transparent border px-3 py-2 rounded-md outline-none border-zinc-300 text-white' type="text" value={firstName} onChange={(e) => setfirstName(e.target.value)} placeholder='Fist Name..' />
            <input className='bg-transparent border px-3 py-2 rounded-md outline-none border-zinc-300 text-white' type="text" value={lastName} onChange={(e) => setlastName(e.target.value)} placeholder='last Name..' />
            <input className='bg-transparent border px-3 py-2 rounded-md outline-none border-zinc-300 text-white' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input className='bg-transparent border px-3 py-2 rounded-md outline-none border-zinc-300 text-white' type="text" value={username} onChange={(e) => setusername(e.target.value)} placeholder='UserName..' />
            <input className='bg-transparent border px-3 py-2 rounded-md outline-none border-zinc-300 text-white' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button className='bg-blue-400 py-3 rounded-2xl text-white font-semibold' type="submit">Register</button>
        </form>
        </div>

    );
};

export default RegistrationPage;

