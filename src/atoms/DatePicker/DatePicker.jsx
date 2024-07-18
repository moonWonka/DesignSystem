import PropTypes from 'prop-types';
import './datepicker.css';

/**
 * Componente de selección de fecha para la UI
 */
export const DatePicker = ({ label, name, value, onChange }) => {
  return (
    <div className="storybook-datepicker">
      {label && <label className="storybook-datepicker__label" htmlFor={name}>{label}</label>}
      <input
        type="date"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="storybook-datepicker__input"
      />
    </div>
  );
};

DatePicker.propTypes = {
  /**
   * Etiqueta para el selector de fecha
   */
  label: PropTypes.string,
  /**
   * Nombre para el input del selector de fecha
   */
  name: PropTypes.string.isRequired,
  /**
   * Valor de la fecha seleccionada
   */
  value: PropTypes.string,
  /**
   * Función para manejar el cambio de fecha
   */
  onChange: PropTypes.func.isRequired,
};

DatePicker.defaultProps = {
  label: '',
  value: '',
};
