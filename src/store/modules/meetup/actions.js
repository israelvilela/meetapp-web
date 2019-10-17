export function getMeetupRequest() {
  return {
    type: '@meetup/GET_MEETUP_REQUEST',
  };
}

export function getMeetupSuccess(meetups) {
  return {
    type: '@meetup/GET_MEETUP_SUCCESS',
    payload: meetups,
  };
}

export function getMeetupFailure() {
  return {
    type: '@meetup/GET_MEETUP_FAILURE',
  };
}

export function insertMeetupRequest(data) {
  return {
    type: '@meetup/INSERT_MEETUP_REQUEST',
    payload: data,
  };
}

export function insertMeetupSuccess(meetup) {
  return {
    type: '@meetup/INSERT_MEETUP_SUCCESS',
    payload: { meetup },
  };
}

export function insertMeetupFailure() {
  return {
    type: '@meetup/INSERT_MEETUP_FAILURE',
  };
}

export function updateMeetupRequest(data) {
  return {
    type: '@meetup/UPDATE_MEETUP_REQUEST',
    payload: data,
  };
}

export function updateMeetupSuccess(meetup) {
  return {
    type: '@meetup/UPDATE_MEETUP_SUCCESS',
    payload: { meetup },
  };
}

export function updateMeetupFailure() {
  return {
    type: '@meetup/UPDATE_MEETUP_FAILURE',
  };
}

export function deleteMeetupRequest(id) {
  return {
    type: '@meetup/DELETE_MEETUP_REQUEST',
    id,
  };
}

export function deleteMeetupSuccess(meetup) {
  return {
    type: '@meetup/DELETE_MEETUP_SUCCESS',
    payload: meetup,
  };
}

export function deleteMeetupFailure() {
  return {
    type: '@meetup/DELETE_MEETUP_FAILURE',
  };
}
