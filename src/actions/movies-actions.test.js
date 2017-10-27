import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './movies-actions'
import * as types from './action-types';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { BASE_URL } from '../constants';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('movie actions', () => {
  beforeEach(() => {
    // Mock asynchronous API calls to simulate
    // fetching the movie data
    const mockMovies = new MockAdapter(axios);
    mockMovies.onGet(`${BASE_URL}/Movies`).reply(200, []);
  });

  it('should dispatch actions when fetching movies is complete', () => {
    const expectedActions = [
      { type: types.FETCH_MOVIES_REQUEST },
      { type: types.FETCH_MOVIES_SUCCESS, payload: [] }
    ];

    const store = mockStore({ results: [], rolesByActor: [] });

    return store.dispatch(actions.fetchMovies())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
