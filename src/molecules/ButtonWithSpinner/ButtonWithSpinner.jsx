// ButtonWithSpinner.jsx
import PropTypes from 'prop-types';
import { Button } from '../../atoms/Button/Button';
import { Spinner } from '../../atoms/Spinner/Spinner';
import { Container } from '../../atoms/Container/Container';
import './buttonWithSpinner.css';

export const ButtonWithSpinner = ({ buttonProps, isLoading, containerProps }) => {
  return (
    <Container {...containerProps}>
      <Button {...buttonProps} />
      {isLoading && <Spinner size="small" />}
    </Container>
  );
};

ButtonWithSpinner.propTypes = {
  buttonProps: PropTypes.shape({
    primary: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    backgroundColor: PropTypes.string,
  }).isRequired,
  isLoading: PropTypes.bool,
  containerProps: PropTypes.shape({
    className: PropTypes.string,
    children: PropTypes.node,
  }),
};

ButtonWithSpinner.defaultProps = {
  isLoading: false,
  containerProps: {
    className: '',
  },
};

export default ButtonWithSpinner;
