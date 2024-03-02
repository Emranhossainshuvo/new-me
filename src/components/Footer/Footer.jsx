import moment from 'moment';



const Footer = () => {
    return (
        <>
            <footer>
                <div>

                </div>
                <div>
                    Copyright &copy; {moment().format('YYYY')}
                </div>
            </footer>
        </>
    );
};

export default Footer;