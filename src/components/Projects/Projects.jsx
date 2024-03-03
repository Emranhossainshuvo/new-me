
const Projects = () => {
    return (
        <>
            <div>

                <div>
                    <h3 className="text-5xl mb-5 text-center border-y-2 py-2 border-slate-700">Projects</h3>
                </div>

                <div className="lg:flex justify-around items-center">
                    <div className="w-[50%]">
                        <img src="https://i.ibb.co/gFk6PBX/Screenshot-from-2024-03-02-21-46-13.png" alt="" />
                    </div>
                    <div className="w-[50%]">
                        <h2 className="text-3xl font-semibold ">Online restaurant</h2>
                        <p>Developed <span>Suicine</span>, an online restaurant shop. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores suscipit autem ratione harum ullam consectetur maiores, sunt amet provident laboriosam quisquam eius esse, accusantium ipsa? Magni iste ab explicabo sunt!  </p>
                    </div>
                </div>
                <div className="lg:flex lg:flex-row-reverse justify-around items-center">
                    <div className="w-[50%]">
                        <img src="https://i.ibb.co/4YQqVLV/Screenshot-from-2024-03-02-21-43-54.png" alt="" />
                    </div>
                    <div className="w-[50%]">
                        <h2 className="text-3xl font-semibold ">Car repaire shop</h2>
                        <p>Developed <span>Car doctor</span>, an online car repairing shop. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores suscipit autem ratione harum ullam consectetur maiores, sunt amet provident laboriosam quisquam eius esse, accusantium ipsa? Magni iste ab explicabo sunt!  </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;