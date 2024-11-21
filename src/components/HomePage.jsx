// src/components/HomePage.jsx
import { useEffect, useState } from 'react';

const HomePage = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        // Fetch friends list
        fetch('http://localhost:7000/api/user/v1/get-users')
            .then(res => res.json())
            .then(data => setFriends(data.users));
    }, []);

    const handleClaimPoints = async (userId) => {
        await fetch(`http://localhost:7000/api/user/v1/claim-points`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId }),
        });
        // Optionally, update friends list here or refetch
    };

    return (
        <div>
            {friends.map(friend => (
                <p key={friend.id} onClick={() => handleClaimPoints(friend.id)}>
                    {friend.name}: {friend.points}
                </p>
            ))}
        </div>
    );
};

export default HomePage;

