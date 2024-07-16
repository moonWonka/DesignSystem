import PropTypes from 'prop-types';
import './checkbox.css';

/**
 * Checkbox component for user interaction
 */
export const Checkbox = ({ name, value, checked, label, onChange }) => {
  return (
    <label className="storybook-checkbox">
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="storybook-checkbox__input"
      />
      <span className="storybook-checkbox__label">{label}</span>
    </label>
  );
};

Checkbox.propTypes = {
  /**
   * Nombre del checkbox
   */
  name: PropTypes.string.isRequired,
  /**
   * Valor del checkbox
   */
  value: PropTypes.string.isRequired,
  /**
   * Estado del checkbox (marcado o no)
   */
  checked: PropTypes.bool.isRequired,
  /**
   * Etiqueta del checkbox
   */
  label: PropTypes.string.isRequired,
  /**
   * Función para manejar el cambio de estado
   */
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  checked: false,
};
