import * as actionTypes from "../actionTypes";
import { Student, StudentsError, StudentActionTypes } from "../../types";

export const getStudentRequest = (student: Student): StudentActionTypes => {
  return {
    type: actionTypes.GET_STUDENT_DETAILS_REQUEST,
    payload: student,
  };
};

export const getStudentSuccess = (student: Student): StudentActionTypes => {
  return {
    type: actionTypes.GET_STUDENT_DETAILS_SUCCESS,
    payload: student,
  };
};

export const getStudentFailure = (
  ErrorMessage: StudentsError
): StudentActionTypes => {
  return {
    type: actionTypes.GET_STUDENT_DETAILS_FAILURE,
    payload: ErrorMessage,
  };
};

export const updateStudentRequest = (student: Student): StudentActionTypes => {
  return {
    type: actionTypes.UPDATE_STUDENT_REQUEST,
    payload: student,
  };
};

export const updateStudentSuccess = (student: Student): StudentActionTypes => {
  return {
    type: actionTypes.UPDATE_STUDENT_SUCCESS,
    payload: student,
  };
};

export const updateStudentFailure = (
  errorMessage: StudentsError
): StudentActionTypes => {
  return {
    type: actionTypes.UPDATE_STUDENT_FAILURE,
    payload: errorMessage,
  };
};
