export const CLEAR_USERBAR_DATA = 'CLEAR_USERBAR_DATA';
export const FETCHED_USERBAR_DATE = 'FETCHED_USERBAR_DATE';

export const claerUserBar = () => ({
  type: CLEAR_USERBAR_DATA
});

export const fetchedUserBar = (data) => ({
  type: FETCHED_USERBAR_DATE,
  data,
});