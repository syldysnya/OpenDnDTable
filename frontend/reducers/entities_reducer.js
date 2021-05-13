import { combineReducers } from "redux";
import citiesReducer from "./cities_reducer";
import playersReducer from "./players_reducer";


const entitiesReducer = combineReducers({
    players: playersReducer,
    cities: citiesReducer,
});

export default entitiesReducer;