import PropTypes from 'prop-types';
import './input.css';

/**
 * Primary UI component for user input
 */
export const Input = ({ label, name, value, placeholder, type, onChange, min, max, step }) => {
  const handleIncrement = () => {
    const newValue = parseFloat(value) + (step || 1);
    if (max === undefined || newValue <= max) {
      onChange({ target: { name, value: newValue.toString() } });
    }
  };

  const handleDecrement = () => {
    const newValue = parseFloat(value) - (step || 1);
    if (min === undefined || newValue >= min) {
      onChange({ target: { name, value: newValue.toString() } });
    }
  };

  const formatRUT = (rut) => {
    // Eliminar puntos y guión
    const cleaned = rut.replace(/[^0-9kK]/g, '');
    if (cleaned.length < 2) return cleaned;

    // Formatear RUT
    let result = '';
    let length = cleaned.length;
    for (let i = 0; i < length; i++) {
      if (i === length - 1) {
        result += '-' + cleaned[i];
      } else {
        result = cleaned[length - 2 - i] + result;
        if ((i + 1) % 3 === 0 && i !== length - 2) {
          result = '.' + result;
        }
      }
    }
    return result;
  };

  const handleChange = (e) => {
    if (type === 'rut') {
      e.target.value = formatRUT(e.target.value);
    }
    onChange(e);
  };

  return (
    <div className="storybook-input">
      {label && <label htmlFor={name} className="storybook-input__label">{label}</label>}
      <div className="storybook-input__wrapper">
        <input
          type={type === 'rut' ? 'text' : type}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          className="storybook-input__field"
          min={min}
          max={max}
          step={step}
        />
        {type === 'number' && (
          <div className="storybook-input__controls">
            <button type="button" className="storybook-input__button" onClick={handleDecrement}>-</button>
            <button type="button" className="storybook-input__button" onClick={handleIncrement}>+</button>
          </div>
        )}
      </div>
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Placeholder del input
   */
  placeholder: PropTypes.string,
  /**
   * Tipo del input
   */
  type: PropTypes.oneOf(['text', 'number', 'password', 'email', 'rut']),
  /**
   * Función para manejar el cambio de valor
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Valor mínimo para input de tipo number
   */
  min: PropTypes.number,
  /**
   * Valor máximo para input de tipo number
   */
  max: PropTypes.number,
  /**
   * Incremento para los botones de tipo number
   */
  step: PropTypes.number,
};

Input.defaultProps = {
  label: '',
  value: '',
  placeholder: '',
  type: 'text',
  min: undefined,
  max: undefined,
  step: 1,
};
