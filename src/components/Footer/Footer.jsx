import moment from 'moment';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";


const Footer = () => {
    return (
        <>
            <footer>
                <div className='bg-[#111111] text-white h-40'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex justify-center gap-5'>
                            <AiFillLinkedin className='text-4xl' />
                            <AiFillGithub className='text-4xl' />
                        </div>
                        <div>
                            <ul className='flex justify-center gap-5'>
                                <li>About</li>
                                <li>Projects</li>
                                <li>Education</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='bg-[#000000] h-10 text-white flex justify-center items-center'>
                    <p className='text-lg font-semibold'>Copyright &copy;{moment().format('YYYY')} all right reserved</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;