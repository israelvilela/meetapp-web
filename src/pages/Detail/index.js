import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  MdLocationOn,
  MdDateRange,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';
import history from '~/services/history';

import * as MeetupActions from '../../store/modules/meetup/actions';

import { Container, EditButton, DeleteButton } from './styles';

export default function Detail() {
  const { location } = useHistory();
  const [meetup, setMeetup] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.state) {
      const { data } = location.state;
      if (data) {
        setMeetup(data);
      }
    }
  }, [location.state, meetup]);

  function handleEdit() {
    history.push({
      pathname: '/meetup',
      state: { data: meetup },
    });
  }

  function handleDelete() {
    console.log('id', meetup.id);
    dispatch(MeetupActions.deleteMeetupRequest(meetup.id));
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
      <img src={meetup.file && meetup.file.url} alt="" />
      <h1>{meetup.description}</h1>
      <MdDateRange color="eee" size={14} />
      <span>{meetup.formattedDate}</span>
      <MdLocationOn color="eee" size={14} />
      <span>{meetup.location}</span>
    </Container>
  );
}
