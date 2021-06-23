import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";


// Where I combined all the my states.
const rootReducer = combineReducers({
    cart : cartReducer,
})

export default rootReducer;