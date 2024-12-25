import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2 className="text-3xl font-bold py-4 text-center">Fantastic Users : {users.length}</h2>
            <div className="grid grid-cols-3 gap-4 mx-6">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;