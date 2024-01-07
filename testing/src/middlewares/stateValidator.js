//IMPORTS -------------------
import tv4 from 'tv4';
import stateSchema from './stateSchema';

//redux middleware function -----------------------
const stateValidator =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    next(action);

    if (!tv4.validate(getState(), stateSchema)) {
      console.warn('Invalid state schema');
    }
  };

//EXPORT -----------------------
export default stateValidator;
