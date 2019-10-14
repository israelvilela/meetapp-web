import React, { useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import DatePicker, { registerLocale } from 'react-datepicker';

import { useField, Form, Input } from '@rocketseat/unform';

import { MdAddCircleOutline } from 'react-icons/md';

import { toast } from 'react-toastify';
import ptBR from 'date-fns/locale/pt-BR';
import { Container } from './styles';

import FileInput from './FileInput/index';

import api from '~/services/api';
import history from '~/services/history';

registerLocale('ptBR', ptBR);

export default function Meetup() {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue } = useField('dateMeetup');
  const [dateMeetup, setDateMeetup] = useState(defaultValue);
  const [meetup, setMeetup] = useState({});
  const { location } = useHistory();

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.dateMeetup',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
    function loadMeetup() {
      if (location.state) {
        const { data } = location.state;
        if (data) {
          setDateMeetup(new Date(data.date));
          setMeetup(data);
        }
      }
    }
    loadMeetup();
  }, [fieldName, location, location.state, registerField]);

  async function handleSubmit(data) {
    const { title, description } = data;

    try {
      await api.post('meetings', {
        title,
        description,
        location: data.location,
        date: dateMeetup,
        file_id: 1,
      });

      history.pushState('/dashboard');

      toast.success('Meetup cadastrado com sucesso.');
    } catch (error) {
      toast.error('Erro ao cadastrar Meetup');
    }
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        {/* <FileInput name="input_id" /> */}
        <Input name="title" placeholder="Título do Meetup" />
        <Input
          multiline
          name="description"
          rows={10}
          placeholder="Descrição completa"
        />
        <DatePicker
          name="dateMeetup"
          dateFormat="dd/MM/yyyy"
          placeholderText="Data do meetup"
          selected={dateMeetup}
          locale="ptBR"
          onChange={date => setDateMeetup(date)}
          ref={ref}
        />
        <Input name="location" placeholder="Localização" />

        <button type="submit">
          <MdAddCircleOutline color="#FFF" size={16} />
          <label>Salvar Meetup</label>
        </button>
      </Form>
    </Container>
  );
}
