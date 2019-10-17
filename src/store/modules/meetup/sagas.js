import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import {
  getMeetupSuccess,
  getMeetupFailure,
  insertMeetupSuccess,
  insertMeetupFailure,
  updateMeetupSuccess,
  updateMeetupFailure,
  deleteMeetupSuccess,
  deleteMeetupFailure,
} from './actions';

export function* getMeetups() {
  try {
    const response = yield call(api.get, 'meetings');
    yield put(getMeetupSuccess(response.data));
  } catch (error) {
    toast.error(error.response.data.message);
    yield put(getMeetupFailure());
  }
}

export function* inserirMeetup({ payload }) {
  try {
    const response = yield call(api.post, 'meetings', payload);

    toast.success('Meetup inserido com sucesso.');
    history.push('/dashboard');
    yield put(insertMeetupSuccess(response.data));
  } catch (error) {
    toast.error(error.response.data.message);
    yield put(insertMeetupFailure());
  }
}

export function* atualizarMeetup({ payload }) {
  try {
    const response = yield call(api.put, 'meetings', payload);

    toast.success('Meetup atualizado com sucesso.');
    history.push('/dashboard');
    yield put(updateMeetupSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao atualizar meetup');
    yield put(updateMeetupFailure());
  }
}

export function* deletarMeetup({ id }) {
  try {
    const response = yield call(api.delete, `meetings/${id}`);

    toast.success('Meetup deletado com sucesso.');
    history.push('/dashboard');
    yield put(deleteMeetupSuccess(response.data));
  } catch (error) {
    toast.error(error.response.data.message);
    yield put(deleteMeetupFailure());
  }
}

export default all([
  takeLatest('@meetup/GET_MEETUP_REQUEST', getMeetups),
  takeLatest('@meetup/INSERT_MEETUP_REQUEST', inserirMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', atualizarMeetup),
  takeLatest('@meetup/DELETE_MEETUP_REQUEST', deletarMeetup),
]);
