import addClassNames from "../../utils/addClassNames";
import PropTypes from 'prop-types';

const Button = ({ children, type }) => {
    const buttonClassNames = addClassNames('button');
    
    return (<button type={type} className={buttonClassNames}>
        {children}
    </button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string.isRequired,
};

export default Button;