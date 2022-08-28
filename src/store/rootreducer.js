import {combineReducers} from 'redux';
import mathFactReducer from '../maths/store/reducer';
import jokeReducer from '../jokes/store/reducer';


const rootReducer = combineReducers({
    math:mathFactReducer,
    joke:jokeReducer,
})

export default rootReducer;