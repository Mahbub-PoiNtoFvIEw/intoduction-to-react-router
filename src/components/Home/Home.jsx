import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            {
                navigation.state === "loading"? <div className="text-center mt-20">
                        <span className="loading loading-ball loading-xs"></span>
                        <span className="loading loading-ball loading-sm"></span>
                        <span className="loading loading-ball loading-md"></span>
                        <span className="loading loading-ball loading-lg"></span>
                    </div>
                    :
                    <Outlet></Outlet>
            }
        </div>
    );
};

export default Home;