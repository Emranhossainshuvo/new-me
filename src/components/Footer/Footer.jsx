import moment from 'moment';



const Footer = () => {
    return (
        <>
            <footer>
                <div>

                </div>
                <div className='bg-[#000000] h-10 text-white flex justify-center items-center'>
                    <p className='text-lg font-semibold'>Copyright &copy;{moment().format('YYYY')} all right reserved</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;