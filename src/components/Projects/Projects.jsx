
const Projects = () => {
    return (
        <>
            <div>
                <h3 className="text-5xl my-10  text-center border-y-2 py-2 border-slate-700">Projects</h3>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 w-full mx-auto grid-cols-1">
                <div className="max-w-sm my-4 mx-2 rounded-sm overflow-hidden hover:shadow-2xl delay-100 shadow-lg">
                    <img className="w-full" src="https://i.ibb.co/QbhL3gr/Screenshot-from-2024-03-05-18-39-20.png" alt="Sunset in the mountains" />
                    <div className="px-6 py-2">
                        <p>E-comers | Restaurant</p>
                        <div className="font-bold text-xl mb-2">Suicine an online restaurant application</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo dolorum quaerat optio placeat, aliquid modi corporis ab exercitationem voluptate velit!
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwind</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Node</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MongoDB</span>
                    </div>
                </div>

                <div className="max-w-sm my-4 mx-2 rounded-sm overflow-hidden shadow-lg hover:shadow-2xl delay-100">
                    <img className="w-full" src="https://i.ibb.co/XCgHYM9/Screenshot-from-2024-03-05-18-46-09.png" alt="Sunset in the mountains" />
                    <div className="px-2 py-4">
                        <p>E-comers | Business app</p>
                        <div className="font-bold text-xl mb-2">Suicine an online restaurant application</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo dolorum quaerat optio placeat, aliquid modi corporis ab exercitationem voluptate velit!
                        </p>
                    </div>
                    <div className="px-2 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwind</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Node</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MongoDB</span>
                    </div>
                </div>

                <div className="max-w-sm my-4 mx-2 rounded-sm overflow-hidden shadow-lg hover:shadow-2xl delay-100">
                    <img className="w-full" src="https://i.ibb.co/BqgwVX4/Screenshot-from-2024-03-06-21-34-15.png" alt="Sunset in the mountains" />
                    <div className="px-2 py-2">
                        <p>Donation | Online service</p>
                        <div className="font-bold text-xl mb-2">An online platfor for donation</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo dolorum quaerat optio placeat, aliquid modi corporis ab exercitationem voluptate velit!
                        </p>
                    </div>
                    <div className="px-2 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwind</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Firebase</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CSS</span>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Projects;