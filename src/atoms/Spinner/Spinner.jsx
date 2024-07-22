import PropTypes from 'prop-types';
import './spinner.css'; 

export const Spinner = ({ size, color, ...props }) => {
  const sizeClass = `spinner--${size}`;

  return (
    <div
      className={`spinner ${sizeClass}`}
      style={{ color }}
      {...props}
    ></div>
  );
};

Spinner.propTypes = {
  /**
   * ¿Qué tamaño debería tener el spinner?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Color del spinner
   */
  color: PropTypes.string,
};

Spinner.defaultProps = {
  size: 'medium',
  color: '#8f6fb7',
};
