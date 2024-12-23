import React, { useState } from 'react';
import { Container, Form as BootstrapForm, Button, Table } from 'react-bootstrap';
import { handleFormSubmit, deleteUser } from "../controllers/userControllers";

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', age: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    handleFormSubmit(formData);
    //setFormData({ name: '', email: '', age: '' }); // Limpa o formulário
  };


  return (
    <Container className="mt-4 p-5 rounded " style={{maxWidth: '500px', color: "white", background: 'gray'}}>
      <h2 className="mb-4">Formulário</h2>
      <BootstrapForm onSubmit={handleSubmit}>
        <BootstrapForm.Group className="mb-3" controlId="formName">
          <BootstrapForm.Label>Nome:</BootstrapForm.Label>
          <BootstrapForm.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </BootstrapForm.Group>
        <BootstrapForm.Group className="mb-3" controlId="formEmail">
          <BootstrapForm.Label>Email:</BootstrapForm.Label>
          <BootstrapForm.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </BootstrapForm.Group>
        <BootstrapForm.Group className="mb-3" controlId="formAge">
          <BootstrapForm.Label>Idade:</BootstrapForm.Label>
          <BootstrapForm.Control
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </BootstrapForm.Group>
        <div className="justify-content-center d-flex">
            <Button className='px-5' variant="secondary" type="submit">
          Enviar
        </Button>
        </div>
        
      </BootstrapForm>
    </Container>
  );
};

export default Form;
