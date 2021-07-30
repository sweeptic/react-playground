import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import Api from '...'


/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//    yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
   yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}



// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {

   const delay = (ms) => new Promise(res => setTimeout(res, ms))


   console.log('call fetchUser');

   const user = yield fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(json => json)

   console.log('delay start...');

   yield call(delay, 2000)
   console.log('delay ended');
   yield put({ type: "USER_FETCH_SUCCEEDED", payload: user });


}



export default mySaga;