import { call, put,takeEvery } from 'redux-saga/effects';

import { fetchJokeApi } from "../../api";

import Action from "./action";

//worker saga
function* fetchJoke(action) {
  try {
    const joke = yield call(fetchJokeApi);
    yield put({
      type: Action.FETCH_JOKE_SUCCESS,
      payload: { joke: joke.joke },
    });
  } catch (e) {
    yield put({
      type: Action.FETCH_JOKE_FAILED,
      payload: { message: e.message },
    });
  }
}

//watcher sagar
function* jokeWatcherSaga() {
  yield takeEvery(Action.FETCH_JOKE_REQUEST, fetchJoke);
}
export default jokeWatcherSaga;
