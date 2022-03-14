import { GET_HOME_DATA_BEGIN, GET_HOME_DATA_ERROR, GET_HOME_DATA_SUCCESS, } from "../action";

const home_reducer = (state, action) => {

    if (action.type === GET_HOME_DATA_BEGIN) {
        return { ...state, home_loading: true };
    }
    if (action.type === GET_HOME_DATA_SUCCESS) {
        return {
            ...state,
            home_loading: false,
            categories: action.payload.records.category,
        };
    }
    if (action.type === GET_HOME_DATA_ERROR) {
        return { ...state, home_loading: false, home_error: true };
    }
    return state;
    throw new Error(`No Matching "${action.type}" - action type`);
};

export default home_reducer;
