import React from 'react';
import { connect } from 'react-redux';
import {getTheWisdom} from './actions';

const KaneyData = props => {
    return (
        <>
            <img />
            <button onClick={() => {
                props.getTheWisdom();
            }}>Get the Wisdom</button>
            {props.error && <div>{props.error}</div>}
            {props.isLoading ? (
                <div>loading the wisdom...</div>
            ) : (
                    <div>{props.wisdom.quote}</div>
                )}
        </>
    )
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        wisdom: state.wisdom
    };
};

export default connect(mapStateToProps, { getTheWisdom })(KaneyData);