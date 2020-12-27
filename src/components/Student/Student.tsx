import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { useHistory } from "react-router-dom";
import { getStudentRequest } from "../../store/actions";
import { Student } from "../../store/types";
import Button from "../common/FormElements/Button";
import "./Student.css";

interface StudentProps {
  student: {
    id: string;
    name: string;
    age: number;
    gender: string;
    school: string;
    city: string;
  };
  selectStudent: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const mapDispatch = {
  getStudent: (student: Student) => getStudentRequest(student),
};
const connector = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & StudentProps;

const StudentItem: React.FC<Props> = (props) => {
  const { student } = props;

  const history = useHistory();

  const getStudentDetails = () => {
    props.getStudent(student);
    history.push(`/student/${student.id}`);
  };

  return (
    <li className="ListGroup-item">
      <div className="checkbox-wrapper">
        <input type="checkbox" id={student.id} onChange={props.selectStudent} />
      </div>
      <div className="ContentWrapper">
        <div className="label-wrapper">
          <label>Name:</label>
          <div>{student.name}</div>
        </div>
        <div className="label-wrapper">
          <label> Age:</label>
          <div>{student.age}</div>
        </div>
        <div className="label-wrapper">
          <label>Gender:</label>
          <div>{student.gender}</div>
        </div>
        <div className="label-wrapper">
          <label>School:</label>
          <div>{student.school}</div>
        </div>
        <div className="label-wrapper">
          <label>City:</label>
          <div>{student.city}</div>
        </div>
      </div>
      <Button onClick={getStudentDetails} buttonClass="BtnStyle">
        student Details
      </Button>
    </li>
  );
};

export default connector(StudentItem);
