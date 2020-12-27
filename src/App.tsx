import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { checkLocalStorageState } from "./store/actions";
import { RootState } from "./store/reducers";

import Students from "./containers/Students/Students";
import StudentDetails from "./containers/Student/StudentDetails";

const mapState = (state: RootState) => {
  return {
    students: state.students.students,
  };
};
const mapDispatch = {
  checkLocalStorage: () => checkLocalStorageState(),
};
const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const App: React.FC<Props> = (props) => {
  useEffect(() => {
    props.checkLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Students} />
        <Route exact path="/:page" component={Students} />
        <Route path="/student/:studentId" component={StudentDetails} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default connector(App);
