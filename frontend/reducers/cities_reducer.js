import { RECEIVE_CITIES } from "../actions/city_actions";


const citiesReducer = (state=[], action) => {
    
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CITIES:
            return action.cities;
        default:
            return state;
    }
};

export default citiesReducer;