import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useHistory } from "react-router-dom";

import { VALIDATOR_REQUIRE } from "../../shared/InputValidators";
import { useForm } from "../../hooks/form-hooks";
import Input from "../../components/common/FormElements/Input";
import Button from "../../components/common/FormElements/Button";
import Spinner from "../../components/common/Spinner/Spinner";
import { updateStudentRequest } from "../../store/actions";
import { RootState } from "../../store/reducers";
import { Student } from "../../store/types";
import "./StudentDetails.css";

const mapState = (state: RootState) => {
  return {
    student: state.student.student,
    loading: state.student.loading,
    canRedirect: state.student.redirectPath,
  };
};

const mapDispatch = {
  onUpdate: (data: Student) => updateStudentRequest(data),
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const StudentDetails = (props: Props) => {
  const [formState, inputHandler, setFormData] = useForm();

  const student = props.student[0];
  const history = useHistory();

  useEffect(() => {
    setFormData(
      {
        name: {
          value: student.name,
          isValid: true,
        },
        age: {
          value: student.age,
          isValid: true,
        },
        gender: {
          value: student.gender,
          isValid: true,
        },
        school: {
          value: student.school,
          isValid: true,
        },
        city: {
          value: student.city,
          isValid: true,
        },
      },
      true
    );
  }, [
    setFormData,
    student.age,
    student.city,
    student.gender,
    student.name,
    student.school,
  ]);

  useEffect(() => {
    if (props.canRedirect) {
      history.push(`/`);
    }
  }, [history, props.canRedirect]);

  const updateSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const updatedStudent: Student = {
      id: student.id,
      name: formState.inputs.name.value,
      age: formState.inputs.age.value,
      gender: formState.inputs.gender.value,
      city: formState.inputs.city.value,
      school: formState.inputs.school.value,
    };
    props.onUpdate(updatedStudent);
  };

  let form = <Spinner />;

  if (!props.loading) {
    form = (
      <form onSubmit={updateSubmitHandler}>
        <Input
          id="name"
          element="input"
          type="text"
          label="Name"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid name."
          onInput={inputHandler}
          initialValue={student.name}
          initialValid={true}
        />
        <Input
          id="age"
          element="input"
          type="number"
          label="Age"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid age."
          onInput={inputHandler}
          initialValue={student.age}
          initialValid={true}
        />
        <Input
          id="gender"
          element="input"
          type="text"
          label="Gender"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter your Gender."
          onInput={inputHandler}
          initialValue={student.gender}
          initialValid={true}
        />
        <Input
          id="school"
          element="input"
          type="text"
          label="School"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid school."
          onInput={inputHandler}
          initialValue={student.school}
          initialValid={true}
        />
        <Input
          id="city"
          element="input"
          type="text"
          label="City"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid city name."
          onInput={inputHandler}
          initialValue={student.city}
          initialValid={true}
        />
        <Button
          type="submit"
          buttonClass="btnProductSubmit"
          disabled={!formState.isValid}
        >
          UPDATE STUDENT
        </Button>
      </form>
    );
  }

  return (
    <>
      <div className="form-wrapper">
        <div className="update-header">
          <h2>Update Student page</h2>
          <Button to={`/`} buttonClass="header-btn">
            Go back
          </Button>
        </div>
        {form}
      </div>
    </>
  );
};

export default connector(StudentDetails);
