
import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const navigate = useNavigate();
    const handleToGoBack = () =>{
        navigate(-1);
    }
    console.log(user)
    return (
        <div className="border border-gray-900 rounded-xl text-center p-6 flex flex-col items-center">
            <div className="flex-grow">
                <h2 className="font-bold italic">{user.name}</h2>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>visit Us: {user.website}</p>
            </div>
            <button onClick={handleToGoBack} className="btn w-[20%] rounded-3xl bg-blue-500 hover:bg-blue-950 hover:text-white">Go Back</button>
        </div>
    );
};

export default UserDetails;