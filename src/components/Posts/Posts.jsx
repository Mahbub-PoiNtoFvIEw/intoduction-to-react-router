import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2 className="text-3xl font-bold py-4 text-center">Posts : {posts.length}</h2>
            <div className="grid grid-cols-3 gap-4 mx-6">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;