import produce from 'immer';

const INITIAL_STATE = {
  meetups: [],
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/GET_MEETUP_SUCCESS': {
        draft.meetups = action.payload;
        break;
      }
      case '@meetup/INSERT_MEETUP_SUCCESS': {
        draft.meetups.push(action.payload.meetup);
        break;
      }
      case '@meetup/UPDATE_MEETUP_SUCCESS': {
        const meetupIndex = draft.meetups.findIndex(
          p => p.id === action.payload.meetup.id
        );
        draft.meetups[meetupIndex] = action.payload.meetup;
        break;
      }
      case '@meetup/DELETE_MEETUP_SUCCESS': {
        const meetupIndex = draft.meetups.findIndex(
          p => p.id === action.meetup.id
        );
        if (meetupIndex >= 0) {
          draft.splice(meetupIndex, 1);
        }
        break;
      }
      default:
    }
  });
}
