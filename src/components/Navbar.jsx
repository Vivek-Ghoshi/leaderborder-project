import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user } = useAuth();

    return (
        <nav className="p-4 shadow-lg bg-purple-900 flex justify-between items-center">
            <h1 className="text-2xl text-white  font-extrabold">Leaderboard App</h1>
            {user && (
                <div>
                    <p>{user.firstName}</p>
                    <p>{user.email}</p>
                    <p>Points: {user.points}</p>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
