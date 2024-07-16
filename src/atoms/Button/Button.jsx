import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * ¿Es esta la principal llamada a la acción en la página?
   */
  primary: PropTypes.bool,
  /**
   * ¿Qué tamaño debería tener el botón?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Contenido del botón
   */
  label: PropTypes.string.isRequired,
  /**
   * Manejador de clic opcional
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined,
};
