import React from 'react';
import PropTypes from 'prop-types';
import styles from './Actor.scss';
import { uniqueId } from 'lodash';

/**
 * Component to display movie details
 */
const Actor = ({ actor }) => {
  return (
    <article className={styles.actor}>
      <header className={styles['actor-header']}>
        <h3>{actor.name}</h3>
      </header>

      <footer className={styles['actor-footer']}>
        <h4>Roles</h4>
        {actor.roles.map((role) => <p key={uniqueId('role_')}>{role.name} ({role.movie})</p>)}
      </footer>
    </article>
  );
};

/**
 * propTypes
 * @actor {object} results - actor data
 */
Actor.propTypes = {
  actor: PropTypes.object.isRequired
};

export default Actor;
