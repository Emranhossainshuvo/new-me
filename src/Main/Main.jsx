import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <>
            <div className="flex">
                <div className="w-96 me-5">
                    <div className="rounded-lg flex flex-col justify-center min-h-screen" style={{ position: 'sticky', top: '0', minHeight: '100vh' }}>
                        <img src="https://i.ibb.co/jRJwGT3/profile-pic.png" alt="" />
                        <div>
                            <h2>Md. Emran Hossain</h2>
                            <p>Junior Mern stack develoer</p>
                            <p>+8801620366102</p>
                            <p>emran.shuv.dev@gmail.com</p>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>

                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Main;