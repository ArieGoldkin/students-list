import * as actionTypes from "./actions/actionTypes";

export interface Student {
  id: string;
  name: string;
  age: number;
  gender: string;
  school: string;
  city: string;
}
export interface UpdateStudent {
  student: Student[];
  loading: boolean;
  error?: string;
  redirectPath: boolean;
}
export interface StudentsError {
  message: string;
}

export interface StudentsState {
  students: Student[];
  loading: boolean;
  error?: string;
}

interface CheckLocalStorageState {
  type: typeof actionTypes.CHECK_LOCAL_STORAGE_STATE;
}

interface GetStudentsRequestAction {
  type: typeof actionTypes.GET_STUDENTS_REQUEST;
}

interface GetStudentsSuccessAction {
  type: typeof actionTypes.GET_STUDENTS_SUCCESS;
  payload: Student[];
}

interface GetStudentsFailureAction {
  type: typeof actionTypes.GET_STUDENTS_FAILURE;
  payload: StudentsError;
}

interface UpdateStudentRequestAction {
  type: typeof actionTypes.UPDATE_STUDENT_REQUEST;
  payload: Student;
}

interface UpdateStudentSuccessAction {
  type: typeof actionTypes.UPDATE_STUDENT_SUCCESS;
  payload: Student;
}
interface UpdateStudentFailureAction {
  type: typeof actionTypes.UPDATE_STUDENT_FAILURE;
  payload: StudentsError;
}

interface DeleteStudentsRequest {
  type: typeof actionTypes.DELETE_STUDENTS_REQUEST;
  payload: string[];
}

interface DeleteStudentsSuccess {
  type: typeof actionTypes.DELETE_STUDENTS_SUCCESS;
  payload: string[];
}

interface DeleteStudentsFailure {
  type: typeof actionTypes.DELETE_STUDENTS_FAILURE;
  payload: StudentsError;
}

interface GetStudentDetailsRequest {
  type: typeof actionTypes.GET_STUDENT_DETAILS_REQUEST;
  payload: Student;
}

interface GetStudentDetailsSuccess {
  type: typeof actionTypes.GET_STUDENT_DETAILS_SUCCESS;
  payload: Student;
}
interface GetStudentDetailsFailure {
  type: typeof actionTypes.GET_STUDENT_DETAILS_FAILURE;
  payload: StudentsError;
}

export type StudentActionTypes =
  | GetStudentsRequestAction
  | GetStudentsSuccessAction
  | GetStudentsFailureAction
  | UpdateStudentRequestAction
  | UpdateStudentSuccessAction
  | UpdateStudentFailureAction
  | CheckLocalStorageState
  | DeleteStudentsRequest
  | DeleteStudentsSuccess
  | DeleteStudentsFailure
  | GetStudentDetailsRequest
  | GetStudentDetailsSuccess
  | GetStudentDetailsFailure;
