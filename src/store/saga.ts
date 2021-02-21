import { all, put, call, delay, takeLatest } from "@redux-saga/core/effects";
import { getType } from "typesafe-actions";
import { actions } from "./actions";

export function* rootSaga() {
  yield all([
    fetchCustomerDataSaga(),
    takeLatest(getType(actions.filterInputUpdated), getFilteredResults),
  ]);
}

export function* fetchCustomerDataSaga() {
  try {
    const results = yield call(() =>
      fetch("./MOCK_DATA.json").then((response) => response.json())
    );
    if (results) {
      yield put(actions.customerDataFetched(results));
    } else {
    }
  } catch (error) {
    console.log(error);
  }
}

export function* getFilteredResults({ payload }: any) {
  try {
    yield delay(333); // we want to wait to see if the user has paused typing before updating auto suggest
    yield put(actions.searchQueryModified(payload));
  } catch (error) {
    console.log(error);
  }
}
