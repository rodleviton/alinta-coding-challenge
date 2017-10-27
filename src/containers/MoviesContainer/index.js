import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as moviesActions from '../../actions/movies-actions';
import Actor from '../../components/Actor';
import styles from './MoviesContainer.scss';

/**
 * Main movie feed connected component
 */
class MoviesContainer extends Component {
  componentWillMount() {
    const { fetchMovies } = this.props.actions;

    // Get the data here
    fetchMovies();
  }

  /**
   * render an individual actor card
   * @param {object} actor - actor data
   */
  renderActor(actor) {
    return (
      <Actor key={uniqueId('actor_')} actor={actor} />
    );
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const actors = this.props.actors || [];

    return (
      <div className={styles.row + ' ' + styles.container}>
        <div id="actors" className={styles.col}>
          <h3 className={styles.h3}>Movie Roles By Actor</h3>
          {
            actors.length ? actors.map(this.renderActor) :
            <div className={styles.empty}>No actors returned</div>
          }
        </div>
      </div>
    );
  }
}

/**
 * propTypes
 * @movies {array} movies - movie results
 */
MoviesContainer.propTypes = {
  actors: PropTypes.array
}

function mapStateToProps(state, props) {
  return {
    actors: state.movies.rolesByActor
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(moviesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
