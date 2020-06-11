export const GET_USER = "GET_USER";
export const DISPLAY_USER = "DISPLAY_USER";
export const GET_USER_LIST="GET_USER_LIST";
export const DISPLAY_USER_LIST="DISPLAY_USER_LIST";

export const ActionGetUserDetails = () => ({
    type: GET_USER
});

export const ActionDisplayUserDetails = user => ({
    type: DISPLAY_USER,
    payload: user
});


export const ActionDisplayUserList = user => ({
    type: DISPLAY_USER_LIST,
    payload: user
});

export const ActionGetUserList = (perPage, page) => {
  return {
    type: GET_USER_LIST,
    payload: {perPage:perPage, page:page}
  }
};
