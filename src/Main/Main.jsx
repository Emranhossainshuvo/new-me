import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <>
            <div className="flex text-white">
                <div className="lg:w-96 me-5">
                    <div className="rounded-lg flex flex-col justify-center" style={{ position: 'sticky', top: '0', minHeight: '100vh' }}>
                        <img src="https://i.ibb.co/jRJwGT3/profile-pic.png" alt="" />
                        <div className="text-start ps-6">
                            <h2 className="text-2xl">Md. Emran Hossain</h2>
                            <p className="text-xl text-[#8699A3]"> Mern stack develoer</p>
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