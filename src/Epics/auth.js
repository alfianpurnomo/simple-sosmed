import { of } from 'rxjs'
import { mergeMap, map, catchError } from 'rxjs/operators'
import {
  LOGIN,
  loginSuccess,
  loginFailure
} from '../_Actions/Auth'
import storage from '../_Config/Storage'

export const loginEpic = (action$, state$, { fetch$ }) => {
  return action$
    .ofType(LOGIN)
    .pipe(
      mergeMap(action => fetch$('/users').pipe(
        map(users => users.data.filter(user =>
          user.username === action.payload.username &&
          user.email === action.payload.email
        )),
        map(user => {
          if (user.length === 1) {
            storage.set('user', JSON.stringify(user[0]))
            return loginSuccess(user[0])
          } else {
            return loginFailure('Username and email not match!')
          }
        }),
        catchError(error => {
          console.log(error)
          return of(loginFailure('Cannot login, please try again :)'))
        })
      ))
    )
}