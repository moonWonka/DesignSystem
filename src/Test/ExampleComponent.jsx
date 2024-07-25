import { useState } from 'react';
import { Container } from '../atoms/Container/Container';
import { Input } from '../atoms/Input/Input';
import { Button } from '../atoms/Button/Button';
import { Heading } from '../atoms/Heading/Heading';
import { Spinner } from '../atoms/Spinner/Spinner';
import { ModalDs } from '../molecules/ModalDs/ModalDs';


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

  const [inputCorreo, setInputCorreo] = useState('');

  const handleInputCorreoChange = (e) => {
    setInputCorreo(e.target.value);
  };

  return (
    <Container className="example-container">
      <ModalDs
        content="Este es el contenido del modal."
        isOpen
        onClose={() => {}}
        size="large"
        title="Título del Modal de ejemplo"
      />
    <Heading
      color="#25bdcc"
      text="Titulo de prueba de heading"
    />


    <Input
      label="Prueba de input tipo correo"
      name="text-input-prueba"
      value={inputCorreo}
      onChange={handleInputCorreoChange}
      placeholder="ingrese email"
      type="email"
    />

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
      <Input
        label="Example Input  pass"
        name="example-inputpass"
        value={inputValueRut}
        placeholder="Ingrese pass"
        type="password"
        onChange={handleInputRutChange}
      />

      <Button
        primary={true}
        label="boton de ejempplo"
      >
      </Button>

      <Spinner
  color="#7251a8"
  size="large"
/>
    </Container>
  );
};

