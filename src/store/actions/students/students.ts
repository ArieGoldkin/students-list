import * as actionTypes from "../actionTypes";
import { Student, StudentsError, StudentActionTypes } from "../../types";

export const checkLocalStorageState = (): StudentActionTypes => {
  return {
    type: actionTypes.CHECK_LOCAL_STORAGE_STATE,
  };
};

export const getStudentsRequest = (): StudentActionTypes => {
  return {
    type: actionTypes.GET_STUDENTS_REQUEST,
  };
};

export const getStudentsSuccess = (students: Student[]): StudentActionTypes => {
  return {
    type: actionTypes.GET_STUDENTS_SUCCESS,
    payload: students,
  };
};

export const getStudentsFailure = (
  ErrorMessage: StudentsError
): StudentActionTypes => {
  return {
    type: actionTypes.GET_STUDENTS_FAILURE,
    payload: ErrorMessage,
  };
};



export const deleteStudentsRequest = (
  students: string[]
): StudentActionTypes => {
  return {
    type: actionTypes.DELETE_STUDENTS_REQUEST,
    payload: students,
  };
};

export const deleteStudentsSuccess = (
  students: string[]
): StudentActionTypes => {
  return {
    type: actionTypes.DELETE_STUDENTS_SUCCESS,
    payload: students,
  };
};

export const deleteStudentsFailure = (
  errorMessage: StudentsError
): StudentActionTypes => {
  return {
    type: actionTypes.DELETE_STUDENTS_FAILURE,
    payload: errorMessage,
  };
};
