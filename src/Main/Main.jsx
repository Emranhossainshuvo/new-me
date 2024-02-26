import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <>
            <div className="w-96">

            </div>

            <div>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default Main;