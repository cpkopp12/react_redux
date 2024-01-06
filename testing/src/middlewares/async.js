const asyncMiddlewareFunction =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    // check to see if action has a promise on its payload, if it does wait, if not next
    if (!action.payload || !action.payload.then) {
      return next(action);
    }
    //wait for promise to resolve and pick up data, tie data to new action, then dispatch
    action.payload.then(function (response) {
      const newAction = { ...action, payload: response };
      dispatch(newAction);
    });
  };

export default asyncMiddlewareFunction;
