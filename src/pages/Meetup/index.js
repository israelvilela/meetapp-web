import React, { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import DatePicker from 'react-datepicker';

import { useField, Form, Input } from '@rocketseat/unform';

import { MdAddCircleOutline } from 'react-icons/md';

import { Container } from './styles';

import FileInput from './FileInput/index';

import * as MeetupActions from '../../store/modules/meetup/actions';

export default function Meetup() {
  const ref = useRef(null);
  const { fieldName, registerField } = useField('dateMeetup');
  const [selected, setSelected] = useState(new Date());

  const dispatch = useDispatch();

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [fieldName, registerField]);

  async function handleSubmit(data) {
    const { title, description, location, fileId } = data;

    const dado = {
      title,
      description,
      location,
      date: selected,
      file_id: 11,
    };

    // if (meetup && meetup.id) {
    //   dispatch(
    //     MeetupActions.updateMeetupRequest({
    //       title,
    //       description,
    //       location,
    //       date: selected,
    //       file_id: 11,
    //       id: meetup.id,
    //     })
    //   );
    // }
    dispatch(MeetupActions.insertMeetupRequest(dado));

    // if (meetup && meetup.id) {
    //   await api.put('meetings', {
    //     id: meetup.id,
    //     title,
    //     description,
    //     location: data.location,
    //     date: selected,
    //     file_id: fileId,
    //   });
    // } else {
    //   await api.post('meetings', {
    //     title,
    //     description,
    //     location: data.location,
    //     date: selected,
    //     file_id: fileId,
    //   });
    // }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FileInput name="fileId" />
        <Input name="title" placeholder="Título do Meetup" />
        <Input
          multiline
          name="description"
          rows={10}
          placeholder="Descrição completa"
        />
        <DatePicker
          name={fieldName}
          selected={selected}
          onChange={date => setSelected(date)}
          locale="pt-BR"
          timeFormat="p"
          dateFormat="Pp"
          ref={ref}
        />
        <Input name="location" placeholder="Localização" />

        <button type="submit">
          <MdAddCircleOutline color="#FFF" size={16} />
          Salvar Meetup
        </button>
      </Form>
    </Container>
  );
}
