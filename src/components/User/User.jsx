import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const User = ({user}) => {

    const {id, name, email, phone} = user;
    return (
        <div className="border border-blue-400 p-6 rounded-xl flex flex-col">
            <div className="flex-grow">
                <h2>Name: {name}</h2>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
            </div>
            <div>
            <Link to={`/user/${id}`}><button className="btn w-[80%] rounded-3xl bg-blue-500 hover:bg-blue-950 hover:text-white">User Details</button></Link>
            </div>
        </div>
    );
};
User.propTypes ={
    user: PropTypes.object,
}

export default User;