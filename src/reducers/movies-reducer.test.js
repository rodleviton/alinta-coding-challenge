import reducer, { getRoles, getActors, getRolesByActor } from './movies-reducer'
import * as types from '../actions/action-types';

describe('movies reducer', () => {
  const defaultPayload = [
    {
      "name":"Beverly Hills Cop",
      "roles":[
        {
          "name":"Axel Foley",
          "actor":"Eddie Murphy"
        },
        {
          "name":"Billy Rosewood",
          "actor":"Judge Reinhold"
        }
      ]
    },
    {
      "name":"Stand By Me",
      "roles":[
        {
          "name":"Gorgie Lachance",
          "actor":"Wil Wheaton"
        }
      ]
    }
  ];

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      results: [],
      rolesByActor: []
    });
  });

  it('should handle FETCH_MOVIES_SUCCESS', () => {
    const expectedResult = {
      results: defaultPayload,
      rolesByActor:[
        {
          name: 'Eddie Murphy',
          roles: [
            {
              actor: 'Eddie Murphy',
              movie: 'Beverly Hills Cop',
              name: 'Axel Foley'
            }
          ]
        },
        {
          name: 'Judge Reinhold',
          roles:[
            {
              actor: 'Judge Reinhold',
              movie: 'Beverly Hills Cop',
              name: 'Billy Rosewood'
            }
          ]
        },
        {
          name: 'Wil Wheaton',
          roles:[
            {
              actor: 'Wil Wheaton',
              movie: 'Stand By Me',
              name: 'Gorgie Lachance'
            }
          ]
        }
      ]
    }

    expect(
      reducer({}, {
        type: types.FETCH_MOVIES_SUCCESS,
        payload: defaultPayload
      })
    ).toEqual(expectedResult);
  });

  describe('getRoles', () => {
    it('should return a single array of all possible roles', () => {
      const expectedResult = [
        {
          actor: 'Eddie Murphy',
          movie: 'Beverly Hills Cop',
          name: 'Axel Foley'
        },
        {
          actor: 'Judge Reinhold',
          movie: 'Beverly Hills Cop',
          name: 'Billy Rosewood'
        },
        {
          actor: 'Wil Wheaton',
          movie: 'Stand By Me',
          name: 'Gorgie Lachance'
        }
      ];

      expect(getRoles(defaultPayload)).toEqual(expectedResult);
    });

    it('should remove any roles that do not have complete data', () => {
      const testInput = [
        {
          "name":"Beverly Hills Cop",
          "roles":[
            {
              "name":"Axel Foley",
              "actor":"" // no actor name
            },
            {
              "name":"Billy Rosewood",
              "actor":"Judge Reinhold"
            }
          ]
        },
        {
          "name":"Stand By Me",
          "roles":[
            {
              "name":"", // No character name
              "actor":"Wil Wheaton"
            }
          ]
        },
        {
          "name":"", // No movie name
          "roles":[
            {
              "name":"",
              "actor":"Wil Wheaton"
            }
          ]
        }
      ];

      const expectedResult = [
        {
          actor: 'Judge Reinhold',
          movie: 'Beverly Hills Cop',
          name: 'Billy Rosewood'
        }
      ];

      expect(getRoles(testInput)).toEqual(expectedResult);
    });
  });

  describe('getActors', () => {
    it('should return a list of all actors', () => {
      const testInput = [
        {
          actor: 'Eddie Murphy',
          movie: 'Beverly Hills Cop',
          name: 'Axel Foley'
        },
        {
          actor: 'Judge Reinhold',
          movie: 'Beverly Hills Cop',
          name: 'Billy Rosewood'
        }
      ];

      const expectedResult = [
        'Eddie Murphy',
        'Judge Reinhold'
      ]

      expect(getActors(testInput)).toEqual(expectedResult);
    });

    it('should remove any duplicates', () => {
      const testInput = [
        {
          actor: 'Eddie Murphy',
          movie: 'Beverly Hills Cop',
          name: 'Axel Foley'
        },
        {
          actor: 'Eddie Murphy', // Duplicate
          movie: 'Beverly Hills Cop',
          name: 'Axel Foley'
        },
        {
          actor: 'Judge Reinhold',
          movie: 'Beverly Hills Cop',
          name: 'Billy Rosewood'
        }
      ];

      const expectedResult = [
        'Eddie Murphy',
        'Judge Reinhold'
      ]

      expect(getActors(testInput)).toEqual(expectedResult);
    });
  });
});
