import produce from 'immer';

const INITIAL_STATE = {
  user: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.user = action.payload.user;
      });
    default:
      return state;
  }
}
