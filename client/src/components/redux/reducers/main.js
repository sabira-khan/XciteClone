import { getProductReducer } from "./ProductReducer";

import {combineReducers} from "redux";

const rootreducers = combineReducers({
    getproductsdata : getProductReducer
});

export default rootreducers;