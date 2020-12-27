export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    let serializedState = JSON.stringify(state);
    if (serializedState === '{"students":{"students":[],"loading":false}}') {
      serializedState = null;
    }
    localStorage.setItem("state", serializedState);
  } catch (error) {
    //
  }
};
