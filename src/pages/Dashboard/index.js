import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { Container, Time } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetings');

      if (response.data) {
        setMeetups(response.data);
      }
    }

    loadMeetups();
  }, []);

  function handleInsertMeetUp() {
    history.push('meetup');
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
