import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const handleToGoBack = () =>{
        navigate(-1);
    }
    return (
        <div className="border border-gray-900 rounded-xl text-center p-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold italic mb-4">Post Details</h2>
            <p className="flex-grow">{post.body}</p>
            <button onClick={handleToGoBack} className="w-[20%] py-2 rounded-3xl btn bg-blue-700 text-white mt-4">Go Back</button>
        </div>
    );
};

export default PostDetails;