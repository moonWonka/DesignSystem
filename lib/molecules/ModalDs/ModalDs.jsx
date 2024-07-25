import PropTypes from 'prop-types';
import { Container } from '../../atoms/Container/Container';
import { Button } from '../../atoms/Button/Button';
import './modal.css';

export const ModalDs = ({ isOpen, title, content, onClose, size, buttonProps }) => {
  if (!isOpen) return null;

  return (
    <Container className="modal-overlay">
      <Container className={`modal-content ${size}`}>
        <button className="modal-close" onClick={onClose}>×</button>
        {title && <h2 className="modal-title">{title}</h2>}
        <Container className="modal-body">
          {content}
        </Container>
        <Container className="modal-footer">
          <Button {...buttonProps}>Acción</Button>
        </Container>
      </Container>
    </Container>
  );
};

ModalDs.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string,
  content: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  buttonProps: PropTypes.object,
};

ModalDs.defaultProps = {
  title: '',
  size: 'normal',
  buttonProps: {},
};

export default ModalDs;