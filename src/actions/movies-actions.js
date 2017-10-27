import axios from 'axios';
import * as types from './action-types';
import { BASE_URL } from '../constants';

export const fetchMovies = () => (dispatch) => {
  const url = `${BASE_URL}/Movies`;

  dispatch({
    type: types.FETCH_MOVIES_REQUEST
  });

  /**
   * Retrieve movies dataset from API
   *
   * Note: Server does not return `Access-Control-Allow-Origin` header. Consider using
   * Chrome exrtension: `https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en`
   * when hitting real API from localhost
   */
  return axios.get(url).then(
    response => {
      dispatch({
        type: types.FETCH_MOVIES_SUCCESS,
        payload: response.data
      });
    },
    error => {
      dispatch({
        type: types.FETCH_MOVIES_FAILURE,
        payload: error
      });
    }
  );
};
