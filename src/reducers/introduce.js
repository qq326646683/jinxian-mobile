import {
    INTRO_SUCCESS,
    INTRO_FAILURE,
} from '../actions/introduce';

export default function introduce(state = {
    introData: [],
}, action) {
    switch (action.type) {
        case INTRO_SUCCESS:
            return {
                ...state,
                introData: action.result.results,
            };
        case INTRO_FAILURE:
            return {
                ...state,
                error: action.error
            };
        default:
            return state
    }
};