import { put } from "redux-saga/effects";
import axios from "axios";

import * as actions from "../actions";

export function* getAllStudents(action) {
  try {
    const response = yield axios.get(
      "https://run.mocky.io/v3/0066a716-32e3-4ba9-9c45-ab8a85a99e55"
    );
    yield put(actions.getStudentsSuccess(response.data.students));
  } catch (err) {
    yield put(
      actions.updateStudentFailure({
        error: "Could not fetch students from server",
      })
    );
  }
}
export function* checkLocalStorage(action) {
  const students = yield localStorage.getItem("state");
  if (students === "null") {
    try {
      const response = yield axios.get(axios.baseURL);
      yield put(actions.getStudentsSuccess(response.data.students));
    } catch (err) {
      yield put(
        actions.updateStudentFailure({
          error: "Could not fetch students from server",
        })
      );
    }
  }
}

export function* deleteStudents(action) {
  try {
    yield put(actions.deleteStudentsSuccess(action.payload));
  } catch (err) {
    yield put(
      actions.deleteStudentsFailure({
        error: "Could not delete student",
      })
    );
  }
}

export function* getStudent(action) {
  try {
    yield put(actions.getStudentSuccess(action.payload));
  } catch (err) {
    yield put(
      actions.getStudentFailure({
        error: "Could not get student details",
      })
    );
  }
}

export function* updateStudent(action) {
  try {
    yield put(actions.updateStudentSuccess(action.payload));
  } catch (err) {
    yield put(
      actions.updateStudentFailure({
        error: "Could not update student",
      })
    );
  }
}
