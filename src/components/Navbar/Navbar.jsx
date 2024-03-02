
const Navbar = () => {
    return (
        <>
            <nav className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold">Md. Emran Hossain</h3>
                <ul className="md:flex text-xl font-semibold gap-4">
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Education</li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;