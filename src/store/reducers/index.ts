import { combineReducers } from "redux";
import studentsReducer from "./students/students";
import studentReducer from "./student/student";

export const rootReducer = combineReducers({
  students: studentsReducer,
  student: studentReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
