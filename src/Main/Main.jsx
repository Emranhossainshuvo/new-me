import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <>
            <div className="flex">
                <div className="w-96">
                    <h3>fuckkkkkkkkkkkkkkkk</h3>
                </div>

                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Main;