import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AppAction from '../actions/AppAction.js';

const App = (props) => {
    const {
        AppState,
        AppDispatcher,
    } = props;
    return (
        <div className="row" style={{ height: '100vh' }}>
            <div
                className="col d-flex justify-content-center align-items-center"
            >
                <button
                    className="btn btn-outline-primary"
                    onClick={AppDispatcher.clickButton}
                >{AppState.word}
                </button>
            </div>
        </div>
    );
};

App.propTypes = {
    AppState: PropTypes.object.isRequired,
    AppDispatcher: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    AppState: state.AppReducer,
});

const mapDispatchToProps = dispatch => ({
    AppDispatcher: bindActionCreators(AppAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
