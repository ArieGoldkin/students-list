import React, { useState } from "react";
import { connect, ConnectedProps } from "react-redux";

import { deleteStudentsRequest } from "../../store/actions";
import { RootState } from "../../store/reducers";
import StudentList from "../StudentsList/StudentsList";
import Pagination from "../../components/Pagination/Pagination";
import Spinner from "../../components/common/Spinner/Spinner";
import Button from "../../components/common/FormElements/Button";

import "./Students.css";

const mapState = (state: RootState) => {
  return {
    students: state.students.students,
    loading: state.students.loading,
  };
};

const mapDispatch = {
  deleteStudentsRequest: (ids: string[]) => deleteStudentsRequest(ids),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const Students = (props: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [studentsPerPage] = useState<number>(8);
  const [numberOfSelected, setNumberOfSelected] = useState<string[]>([]);

  // Get current students
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = props.students.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  //Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const selectedStudents = (ids: string[]) => {
    setNumberOfSelected(ids);
  };

  //Delete students
  const deleteSelectedHandler = () => {
    props.deleteStudentsRequest(numberOfSelected);
  };

  return (
    <div className="ListWrapper">
      {props.loading && <Spinner />}
      {!props.loading && props.students && (
        <>
          <h1 className="Header">Students List</h1>
          <Button danger buttonClass="Btn" onClick={deleteSelectedHandler}>
            DELETE SELECTED
          </Button>
          <StudentList
            items={currentStudents}
            loading={props.loading}
            selectedStudents={selectedStudents}
          />
          <Pagination
            studentsPerPage={studentsPerPage}
            totalStudents={props.students.length}
            paginate={paginate}
          />
        </>
      )}
    </div>
  );
};

export default connector(Students);
