import { USER_FETCH_SUCCEEDED } from '../actions/quote';
const initState = {};

export const quoteReducer = (state = initState, action) => {
   switch (action.type) {
      case USER_FETCH_SUCCEEDED:
         console.log('USER_FETCH_SUCCEEDED reducer');
         console.log(action);

         return action.payload;

      default:
         return state;
   }
};