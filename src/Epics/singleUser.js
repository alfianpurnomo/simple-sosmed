import { of } from 'rxjs'
import { takeUntil, mergeMap, map, catchError } from 'rxjs/operators'

import {
  FETCH_SINGLE_USER,
  CLEAR_SINGLE_USER,
  fetchSingleUserSuccess,
  fetchSingleUserFailure
} from '../_Actions/singleUser'
import storage from '../_Config/Storage'

const fetchSingleUserEpic = (action$, state$, { fetch$ } ) => {
  return action$
    .ofType(FETCH_SINGLE_USER)
    .pipe(
      mergeMap(action => {
        const user$ = typeof action.id === 'undefined'
          ? of({data: JSON.parse(storage.get('user'))})
          : fetch$(`/users/${action.id}`)
        return user$.pipe(
          map(response => response.data),
          mergeMap(user => fetch$(`/posts?userId=${user.id}`).pipe(
            map(posts => ({posts: posts.data, ...user})),
            mergeMap(user => fetch$(`/albums?userId=${user.id}`).pipe(
              map(albums => ({albums: albums.data, ...user})),
              map(user => fetchSingleUserSuccess(user)),
              takeUntil(action$.ofType(CLEAR_SINGLE_USER))
            ))
          )),
          catchError(error => {
            console.log(error)
            return of(fetchSingleUserFailure('Cannot get user, please try again :)'))
          })
        )
      })
    )
}

export default fetchSingleUserEpic