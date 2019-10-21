/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline } from 'react-icons/md';
import history from '~/services/history';
import * as MeetupActions from '../../store/modules/meetup/actions';
import { Container, Time } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MeetupActions.getMeetupRequest());
  }, []);

  const list = useSelector(state => state.meetup.meetups);

  function handleInsertMeetUp() {
    history.push('/meetup');
  }

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <button type="button" onClick={handleInsertMeetUp}>
          <div>
            <MdAddCircleOutline color="#FFF" size={16} />
            <span>Novo meetup</span>
          </div>
        </button>
      </header>

      <ul>
        {list && list.length > 0
          ? list.map(m => {
              return (
                <Link
                  to={{
                    pathname: '/detail',
                    state: { id: m.id },
                  }}
                  key={m.id}
                >
                  <Time>
                    <strong>{m.title}</strong>
                    <span>{m.formattedDate} > </span>
                  </Time>
                </Link>
              );
            })
          : null}
      </ul>
    </Container>
  );
}
