import PropTypes from 'prop-types';
import addClassNames from '../../utils/addClassNames';

export const deleteContactButtonNames = addClassNames(
    'button'
);

const IconButton = ({
    children,
    type,
    ariaLabel,
    width,
    height,
    onClick,
    className,
}) => {
    return (
        <button
            type={type}
            aria-label={ariaLabel}
            width={width}
            height={height}
            onClick={onClick}
            className={className}
        >{children}</button>
    );
};

IconButton.propTypes = {
  type: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IconButton;