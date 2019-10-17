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
        console.log(action.payload.meetup);
        draft.meetups = [...action.payload.meetup];
        console.log(draft.meetups);
        break;
      }
      case '@meetup/DELETE_MEETUP_SUCCESS': {
        console.log('draft', draft);
        const meetupIndex = draft.findIndex(p => p.id === action.meetup.id);

        if (meetupIndex >= 0) {
          draft.splice(meetupIndex, 1);
        }
        break;
      }
      default:
    }
  });
}
