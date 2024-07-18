import PropTypes from 'prop-types';

export const WonkaContainer = ({ className, ...props }) => {
  return (
    <div className={className} {...props}>
      <h1>Wonka Container</h1>
    </div>
  );
};

WonkaContainer.propTypes = {
  /**
   * Clase CSS adicional para aplicar estilos personalizados
   */
  className: PropTypes.string,
};

WonkaContainer.defaultProps = {
  className: '',
};
