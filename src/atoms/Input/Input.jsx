import PropTypes from 'prop-types';
import './input.css';

/**
 * Primary UI component for user input
 */
export const Input = ({ label, name, value, placeholder, type, onChange }) => {
  return (
    <div className="storybook-input">
      {label && <label htmlFor={name} className="storybook-input__label">{label}</label>}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="storybook-input__field"
      />
    </div>
  );
};

Input.propTypes = {
  /**
   * Etiqueta del input
   */
  label: PropTypes.string,
  /**
   * Nombre del input
   */
  name: PropTypes.string.isRequired,
  /**
   * Valor del input
   */
  value: PropTypes.string,
  /**
   * Placeholder del input
   */
  placeholder: PropTypes.string,
  /**
   * Tipo del input
   */
  type: PropTypes.oneOf(['text', 'number', 'password', 'email']),
  /**
   * Función para manejar el cambio de valor
   */
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  label: '',
  value: '',
  placeholder: '',
  type: 'text',
};
