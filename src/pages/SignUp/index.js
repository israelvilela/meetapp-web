import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

// import { Container } from './styles';

export default function SignUp() {
  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <>
      <span>M</span>
      <Form onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já possui login</Link>
      </Form>
    </>
  );
}
