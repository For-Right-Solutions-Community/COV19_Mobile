
export default function (state = {
  token: "default",
  loading: true,
  error: null,
  subscribe:"default"
}, action) {
  if (action) {
    switch (action.type) {
      case 'SAVE_SUBSCRIBE':
        return { ...state, subscribe: action.subscribe };
      case 'GET_TOKEN':
          return { ...state, token: action.token };
      case 'SAVE_TOKEN':
          return { ...state, token: action.token };
      case 'REMOVE_TOKEN':
          return { ...state, token: action.token };
      case 'LOADING':
          return { ...state, loading: action.isLoading };
      case 'ERROR':
          return { ...state, error: action.error };
      default:
          return state;
  }}
  return state;
}