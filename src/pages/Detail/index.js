import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';
import {
  MdLocationOn,
  MdDateRange,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';
import history from '~/services/history';

import * as MeetupActions from '../../store/modules/meetup/actions';

import { Container, EditButton, DeleteButton, Location } from './styles';

export default function Detail() {
  const { location } = useHistory();
  const [meetup, setMeetup] = useState({});
  const dispatch = useDispatch();

  const result = useSelector(state => {
    const obj = state.meetup.meetups.find(m => m.id === location.state.id);
    return obj;
  });

  useEffect(() => {
    if (result) {
      setMeetup(result);
    }
  }, [result]);

  function handleEdit() {
    history.push({
      pathname: '/meetup',
      state: { id: meetup.id },
    });
  }

  function handleDelete() {
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
      <Location>
        <div>
          <MdDateRange color="eee" size={14} />
          <span>{meetup.formattedDate}</span>
        </div>
        <div>
          <MdLocationOn color="eee" size={14} />
          <span>{meetup.location}</span>
        </div>
      </Location>
    </Container>
  );
}
