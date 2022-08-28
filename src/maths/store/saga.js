import { call, put, takeLatest } from "redux-saga/effects";

import { fetchMathApi } from "../../api";

import MathAction from "./action";

function* fetchMathFact(action) {
  try {
    const fact = yield call(fetchMathApi);
    yield put({
      type: MathAction.MATH_SUCCESS_FACT,
      payload: { fact: fact, successMessage: "Fact fetch successfully" },
    });
  } catch (e) {
    yield put({
      type: MathAction.MATH_FAILED_FACT,
      payload: { messageError: e.message },
    });
  }
}

//watcher saga

function* mathWacherSaga() {
  yield takeLatest(MathAction.MATH_REQUEST_FACT, fetchMathFact);
}
export default mathWacherSaga;
