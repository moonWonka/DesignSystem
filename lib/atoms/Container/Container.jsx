import PropTypes from 'prop-types';
import './container.css';

export const Container = ({ children, className, ...props }) => {
  return (
    <div className={`storybook-container ${className}`} {...props}>
      {children}
    </div>
  );
};


Container.propTypes = {
  /**
   * Contenido a ser renderizado dentro del contenedor
   */
  children: PropTypes.node.isRequired,
  /**
   * Clase CSS adicional para aplicar estilos personalizados
   */
  className: PropTypes.string,
};

Container.defaultProps = {
  className: '',
};

export default Container;