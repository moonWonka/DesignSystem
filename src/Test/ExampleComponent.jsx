import { useState } from 'react';
import { Container } from '../atoms/Container/Container';
import { Input } from '../atoms/Input/Input';
import { Button } from '../atoms/Button/Button';
// import './example.css';

export const ExampleComponent = () => {
  const [inputValueRut, setInputValueRut] = useState('');

  const handleInputRutChange = (e) => {
    setInputValueRut(e.target.value);
  };

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Container className="example-container">
      <Input
        label="Example Input  Rut"
        name="example-input Rut"
        value={inputValueRut}
        placeholder="Ingrese Rut"
        type="rut"
        onChange={handleInputRutChange}
      />
      <Input
        label="Example Input"
        name="example-input text"
        value={inputValue}
        placeholder="Ingrese text"
        type="text"
        onChange={handleInputChange}
      />


      <Button
        primary={true}
        label="boton de ejempplo"
      >

      </Button>
    </Container>
  );
};

