import { WISDOM_LOADING, WISDOM_LOADED, WISDOM_FAILED } from '../actions';

const initialState = {
    isLoading: false,
    error: "",
    wisdom: { quote: "" }
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case WISDOM_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case WISDOM_LOADED:
            return {
                ...state,
                wisdom: action.payload,
                isLoading: false
            };
        case WISDOM_FAILED:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
};

export default reducer;