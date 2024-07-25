import PropTypes from 'prop-types';
import { Container } from '../atoms/Container/Container';
import { Button } from '../atoms/Button/Button';

/**
 * Componente que envuelve un botón dentro de un contenedor
 */
export const ContainerWithButton = ({ containerClassName, buttonProps, children }) => {
  return (
    <Container className={containerClassName}>
      <Button {...buttonProps} />
      {children}
    </Container>
  );
};

ContainerWithButton.propTypes = {
  /**
   * Clase CSS adicional para aplicar al contenedor
   */
  containerClassName: PropTypes.string,
  /**
   * Propiedades a ser pasadas al botón
   */
  buttonProps: (Button.propTypes.primary),
  /**
   * Contenido adicional a ser renderizado dentro del contenedor
   */
  children: PropTypes.node,
};

ContainerWithButton.defaultProps = {
  containerClassName: '',
  buttonProps: {},
  children: null,
};

export default ContainerWithButton;