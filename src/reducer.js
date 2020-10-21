export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // Remove after developing
  token:
    "BQDWDaSpjmG927UfPpQRAnUQ2DrUiYNQ6n_jg5ZMi94sQdqmDQuuNXJXAppas08ft_IG5WNzDTUlkWhPGSNkSWp0XEAj4bxkJFL1g5-uJvDbY-w282ub_cnGzSczsn9sMktxYRJV7FPri2tXVIQ1MsV-JksNxgzYbviLHFTBVNFJN-7b_7y5",
};

const reducer = (state, action) => {
  console.log("action", action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
