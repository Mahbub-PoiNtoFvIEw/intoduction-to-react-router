import { Link, useRouteError } from "react-router-dom";

const ErrorMessage = () => {
    const error = useRouteError();
    return (
        <div className="mt-32 text-center space-y-4">
            <h2 className="text-4xl font-bold">Oops!!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>page Not Found</h3>
                    <Link to={`/`}><button className="btn w-[20%] rounded-3xl bg-blue-500 hover:bg-blue-950 hover:text-white">Go Back</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorMessage;