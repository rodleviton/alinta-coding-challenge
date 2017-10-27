import * as types from '../actions/action-types';
import { uniqBy, sortBy } from 'lodash';

// Set initial state
const initialState = {
  results: [],
  rolesByActor: []
};

/**
 * Flatten movie arrays into a combined array containing all movie roles
 * @param  {array} movies - Movies API payload
 * @return {array}        - Single array containing all movie role possibilities
 */
export const getRoles = (movies) => {
  // Remove roles that do not have a complete data set
  const hasCompleteData = (role) => !!(role.actor && role.movie && role.name);

  return movies.reduce((movieAcc, movie) => {
    return movieAcc.concat(...movie.roles.reduce(
        (rolesAcc, role) => [...rolesAcc, Object.assign(role, { movie: movie.name || '' }) ], []));
  }, []).filter(hasCompleteData);
};

/**
 * Filter unique actor names from all roles
 * @param  {array} roles - List of all movie roles
 * @return {array}       - Array containing all unique actors names
 */
export const getActors = (roles) => {
  return roles.reduce((acc, role) => {
    return (acc.indexOf(role.actor) === -1) ? [...acc, role.actor] : acc;
  }, []);
}

/**
 * Construct a dataset grouping all roles by actor
 * @param  {array} roles  - Single array containing all movie role possibilities
 * @param  {array} actors - Array containing all unique actors names
 * @return {array}        - normalized dataset
 */
export const getRolesByActor = (roles, actors) => {
  return sortBy(actors).reduce((acc, actor) => {
    // Construct an array containing all `unique` roles by actor
    const uniqueRolesByActor = uniqBy(roles.filter((role) => role.actor === actor), 'name');

    // e.g. { name: "Wil Wheaton", roles: [{ name: "Gorgie Lachance", movie: "Stand By Me" }, ...] }
    return [...acc, {
      name: actor,
      roles: sortBy(uniqueRolesByActor)
    }]
  }, []);
};

export default (state = initialState, action) => {
  switch (action.type) {
    /**
     * Handle success for fetching movies
     * @return  {object} - new state
     */
    case types.FETCH_MOVIES_SUCCESS:
      const payload = action.payload || []; // Handle empty response payload
      const roles = getRoles(payload);
      const actors = getActors(roles);

      return {
        // Return raw result as we may need access them later
        results: payload,
        // Normalize response shape for optimal use within application
        rolesByActor: getRolesByActor(roles, actors)
      };

    default:
      return state
  }
};
