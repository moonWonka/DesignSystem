import PropTypes from 'prop-types';
import './heading.css';

/**
 * Componente de UI para mostrar títulos
 */
export const Heading = ({ level, text, color, className, ...props }) => {
  const Tag = `h${level}`;
  return (
    <Tag className={`storybook-heading ${className}`} style={{ color }} {...props}>
      {text}
    </Tag>
  );
};

Heading.propTypes = {
  /**
   * Nivel del encabezado (h1, h2, h3, etc.)
   */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  /**
   * Texto del encabezado
   */
  text: PropTypes.string.isRequired,
  /**
   * Color del texto
   */
  color: PropTypes.string,
  /**
   * Clase CSS adicional para aplicar estilos personalizados
   */
  className: PropTypes.string,
};

Heading.defaultProps = {
  level: 1,
  color: '#000', // Negro por defecto
  text: "Design System",
  className: '',
};
