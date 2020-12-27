import React, { useState, useEffect } from "react";
import StudentItem from "../../components/Student/Student";
import "./StudentsList.css";

interface StudentListProps {
  loading: boolean;
  items: {
    id: string;
    name: string;
    age: number;
    gender: string;
    school: string;
    city: string;
  }[];
  selectedStudents: (ids: string[]) => void;
}

const StudentList: React.FC<StudentListProps> = (props) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChangeBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newSelected: string[] = [];
    const studentId = event.target.id;
    const selectedIndex = selected.indexOf(studentId);

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, studentId);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  useEffect(() => {
    props.selectedStudents(selected);
  }, [props, selected]);

  if (props.loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul className="ListGroup">
      {props.items.map((student) => (
        <StudentItem
          key={student.id}
          student={student}
          selectStudent={handleChangeBox}
        />
      ))}
    </ul>
  );
};

export default StudentList;
