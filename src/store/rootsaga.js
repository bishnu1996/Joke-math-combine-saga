import { all, spawn } from 'redux-saga/effects';
import mathWacherSaga from '../maths/store/saga';
import jokeWatcherSaga from '../jokes/store/saga';

function* rootsaga(){
    yield all([spawn(jokeWatcherSaga),spawn(mathWacherSaga)]);
}
export default rootsaga;