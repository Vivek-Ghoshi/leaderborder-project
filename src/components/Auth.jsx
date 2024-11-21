import axios from "axios";

const token = localStorage.getItem('token');

const claimPoints = async()=>{
    try {
        await axios.patch(`${process.env.REACT_APP_API_URL}/api/user/v1/claim-points`,{},{
            headers:{Authorization: `Bearer ${token}`}
        });
        alert('points claimed successfully')
    } catch (error) {
        console.log('error is: ',error)
    }
};