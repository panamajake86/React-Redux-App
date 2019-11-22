import axios from 'axios';

export const WISDOM_LOADING = 'WISDOM_LOADING';
export const WISDOM_LOADED = 'WISDOM_LOADED';
export const WISDOM_FAILED = 'WISDOM_FAILED';

export const getTheWisdom = () => dispatch => {
    dispatch({ type: WISDOM_LOADING });

    axios
        .get("https://api.kanye.rest")
        .then(res => {
            // console.log(res.data.quote)
            dispatch({
                type: WISDOM_LOADED,
                payload: { quote: res.data.quote }
            })
        })
        .catch(err => console.log(err));
};