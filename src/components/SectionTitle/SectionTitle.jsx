import PropTypes from 'prop-types';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto w-2/12'>
            <h3>{heading}</h3>
            <p>{subHeading}</p>
        </div>
    );
};

export default SectionTitle;

SectionTitle.propTypes = {
    heading: PropTypes.any,
    subHeading: PropTypes.any
};