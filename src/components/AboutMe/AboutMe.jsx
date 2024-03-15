
const AboutMe = () => {
    return (
        <>
            <div className="lg:flex flex-row-reverse justify-center items-center">
                <div>
                    <img src="https://i.ibb.co/jRJwGT3/profile-pic.png" alt="" />
                </div>
                <div className="w-[50%]">
                    <h2 className="bg-[#5D71AB] text-3xl font-semibold text-white p-2 w-[30%] rounded-e-full mb-3">About me</h2>
                    <p className="pb-1 text-lg">Hi,</p>
                    <p className="pb-1 text-lg">My name is Md. Emran Hossain</p>
                    <p className="pb-1 text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse sit sequi unde vitae error.</p>
                    <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore eveniet maiores facilis, voluptates nihil, voluptate a blanditiis, natus voluptatibus nesciunt sit placeat vero alias itaque!</p>
                </div>
            </div>
        </>
    );
};

export default AboutMe;