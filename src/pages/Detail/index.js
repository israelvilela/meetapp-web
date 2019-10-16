import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  MdLocationOn,
  MdDateRange,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';
import history from '~/services/history';

import { Container, EditButton, DeleteButton } from './styles';

import api from '~/services/api';

export default function Detail() {
  const { location } = useHistory();
  const [meetup, setMeetup] = useState({});

  useEffect(() => {
    if (location.state) {
      const { data } = location.state;
      if (data) {
        setMeetup(data);
      }
    }
  }, [location.state]);

  function handleEdit() {
    history.push({
      pathname: '/meetup',
      state: { data: meetup },
    });
  }

  async function handleDelete() {
    try {
      await api.delete(`meetings/${meetup.id}`);
      toast.success('Meetup excluído com sucesso.');

      history.push('/dashboard');
    } catch (error) {
      toast.success('Falha ao excluir meetup');
    }
  }
  return (
    <Container>
      <header>
        <strong>{meetup.title}</strong>
        <div>
          <EditButton onClick={handleEdit}>
            <MdModeEdit />
            <span>Editar</span>
          </EditButton>
          <DeleteButton onClick={handleDelete}>
            <MdDeleteForever />
            <span>Cancelar</span>
          </DeleteButton>
        </div>
      </header>
      <img
        src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg"
        alt=""
      />
      <h1>{meetup.description}</h1>
      <MdDateRange color="eee" size={14} />
      <span>{meetup.formattedDate}</span>
      <MdLocationOn color="eee" size={14} />
      <span>{meetup.location}</span>
    </Container>
  );
}
