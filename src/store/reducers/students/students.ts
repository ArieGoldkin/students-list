// import { updateObject } from "../../../shared/utility";
import { Reducer } from "redux";
import * as actionTypes from "../../actions/actionTypes";
import { StudentsState, StudentActionTypes } from "../../types";

const initialState: StudentsState = {
  students: [],
  loading: false,
  error: undefined,
};

export const reducer: Reducer<StudentsState> = (
  state = initialState,
  action: StudentActionTypes
) => {
  switch (action.type) {
    case actionTypes.GET_STUDENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case actionTypes.GET_STUDENTS_SUCCESS:
      return {
        ...state,
        students: action.payload,
        loading: false,
      };
    case actionTypes.DELETE_STUDENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.DELETE_STUDENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        students: [
          ...state.students.filter((student) => {
            return !action.payload.includes(student.id);
          }),
        ],
      };
    case actionTypes.UPDATE_STUDENT_SUCCESS:
      const updatedStudentId = action.payload.id;
      const index = state.students.findIndex(
        (student) => student.id === updatedStudentId
      );
      const newArray = [...state.students];
      newArray[index].name = action.payload.name;
      newArray[index].age = action.payload.age;
      newArray[index].gender = action.payload.gender;
      newArray[index].city = action.payload.city;
      newArray[index].school = action.payload.school;
      return {
        ...state,
        loading: false,
        students: newArray,
      };
    default:
      return state;
  }
};

export default reducer;
