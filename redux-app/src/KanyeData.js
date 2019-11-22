import React from 'react';
import { connect } from 'react-redux';
import { getTheWisdom } from './actions';
import pic from './images/pic.gif';

const KaneyData = props => {
    return (
        <div className="kanye">
            <img src={pic} />
            <div className='box'>
                <button onClick={() => {
                    props.getTheWisdom();
                }}>Get the Wisdom</button>
                {props.error && <div>{props.error}</div>}
                {props.isLoading ? (
                    <div>loading the wisdom...</div>
                ) : (
                        <div className='quote'>{props.wisdom.quote}</div>
                    )}
            </div>
        </div>
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