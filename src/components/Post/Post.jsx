import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const Post = ({post}) => {
    const navigate = useNavigate();
    const handleToSeeDetails = () =>{
        navigate(`/post/${id}`);
    }
    const {id, title} = post;
    return (
        <div className="border border-blue-400 p-6 rounded-xl flex flex-col">
            <h2 className="text-xl mb-4 flex-grow"><span className="font-bold">Title </span>: {title}</h2>
            <Link to={`/post/${id}`}><button className="w-[80%] py-2 rounded-3xl btn bg-blue-700 text-white m-auto">Read Post Details</button></Link>
            <button onClick={handleToSeeDetails} className="w-[80%] py-2 rounded-3xl btn bg-blue-700 text-white mt-4">Click to see details</button>
        </div>
    );
};
Post.propTypes ={
    post: PropTypes.object,
}

export default Post;