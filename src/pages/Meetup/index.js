import { Form, Input, useField } from '@rocketseat/unform';
import pt from 'date-fns/locale/pt-BR';
import React, { useEffect, useRef, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { MdAddCircleOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as MeetupActions from '../../store/modules/meetup/actions';
import FileInput from './FileInput/index';
import { Container } from './styles';

registerLocale('pt', pt);

export default function Meetup() {
  const { location } = useHistory();
  const ref = useRef(null);
  const { dataMeetup, registerField } = useField('dateMeetup');
  const [dataSelecionada, setDataSelecionada] = useState();
  const [meetup, setMeetup] = useState({});

  const result = useSelector(state => {
    const obj = state.meetup.meetups.find(
      m => location.state && m.id === location.state.id
    );
    return obj;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    registerField({
      name: dataMeetup,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
    if (meetup && meetup.date) {
      setDataSelecionada(Date.parse(meetup.date));
    }
  }, [dataMeetup, meetup, registerField]);

  useEffect(() => {
    if (result) {
      setMeetup(result);
    }
  }, [result]);

  async function handleSubmit(data) {
    const { title, description, file_id } = data;
    if (meetup && meetup.id) {
      dispatch(
        MeetupActions.updateMeetupRequest({
          title,
          description,
          location: data.location,
          date: dataSelecionada,
          file_id,
          id: meetup.id,
        })
      );
    } else {
      dispatch(
        MeetupActions.insertMeetupRequest({
          title,
          description,
          location: data.location,
          date: dataSelecionada,
          file_id,
        })
      );
    }
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        <FileInput name="file_id" />
        <Input name="title" placeholder="Título do Meetup" />
        <Input
          multiline
          name="description"
          rows={10}
          placeholder="Descrição completa"
          value={meetup.description}
        />
        <DatePicker
          placeholderText="Data do meetup"
          name={dataMeetup}
          selected={dataSelecionada}
          onChange={date => setDataSelecionada(date)}
          dateFormat="dd/MM/yyyy h:mm aa"
          locale="pt"
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          ref={ref}
        />
        <Input name="location" placeholder="Localização" />

        <button type="submit">
          <div>
            <MdAddCircleOutline color="#FFF" size={16} />
            <span>Salvar Meetup</span>
          </div>
        </button>
      </Form>
    </Container>
  );
}
