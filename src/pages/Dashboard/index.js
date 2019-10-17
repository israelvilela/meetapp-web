import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Time } from './styles';
import history from '~/services/history';

import * as MeetupActions from '../../store/modules/meetup/actions';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MeetupActions.getMeetupRequest());
  }, [dispatch]);

  // const result = useSelector(state => state.meetup.meetups);
  // console.log(result);

  function handleInsertMeetUp() {
    history.push('/meetup');
  }

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <button type="button" onClick={handleInsertMeetUp}>
          Novo meetup
        </button>
      </header>

      <ul>
        {meetups.map(m => {
          return (
            <Link
              to={{
                pathname: '/detail',
                state: { data: m },
              }}
              key={m.id}
            >
              <Time>
                <strong>{m.title}</strong>
                <span>{m.formattedDate} > </span>
              </Time>
            </Link>
          );
        })}
      </ul>
    </Container>
  );
}
