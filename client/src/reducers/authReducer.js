import { FETCH_USER } from '../actions/types';//determine if the user is logged in
export default function (state = null, action) {
  switch (action.type) {
    case FETCH_USER://we heard back from the fetchUser action
      return action.payload || false;//result should be either user model or false
      //note that payload if from index and used in api
    default:
      return state;//we have no idea whether the user is logged in since we just sent the request
  }
}
