import { Reducer } from "redux";
import * as actionTypes from "../../actions/actionTypes";
import { UpdateStudent, StudentActionTypes } from "../../types";

const initialState: UpdateStudent = {
  student: [],
  loading: false,
  error: undefined,
  redirectPath: false,
};

export const reducer: Reducer<UpdateStudent> = (
  state = initialState,
  action: StudentActionTypes
) => {
  switch (action.type) {
    case actionTypes.GET_STUDENT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        redirectPath: false,
      };
    case actionTypes.GET_STUDENT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        student: [action.payload],
      };
    case actionTypes.UPDATE_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.UPDATE_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        redirectPath: true,
      };
    default:
      return state;
  }
};

export default reducer;
