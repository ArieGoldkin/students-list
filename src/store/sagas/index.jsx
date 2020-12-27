import { takeLatest, all, fork } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";

import {
  getAllStudents,
  checkLocalStorage,
  deleteStudents,
  getStudent,
  updateStudent,
} from "./students";

function* watchStudents() {
  yield all([
    takeLatest(actionTypes.GET_STUDENTS_REQUEST, getAllStudents),
    takeLatest(actionTypes.CHECK_LOCAL_STORAGE_STATE, checkLocalStorage),
    takeLatest(actionTypes.DELETE_STUDENTS_REQUEST, deleteStudents),
    takeLatest(actionTypes.GET_STUDENT_DETAILS_REQUEST, getStudent),
    takeLatest(actionTypes.UPDATE_STUDENT_REQUEST, updateStudent),
  ]);
}

export default function* rootSagas() {
  yield all([fork(watchStudents)]);
}
