import { from,of } from 'rxjs'
import { takeUntil, mergeMap, map, catchError } from 'rxjs/operators'

import {
  OPEN_MODAL,
  FETCH_SINGLE_POST,
  CREATE_SINGLE_POST,
  CLEAR_SINGLE_POST,
  fetchSinglePost,
  fetchSinglePostSuccess,
  fetchSinglePostFailure,
  createSinglePostSuccess,
  createSinglePostFailure,
  clearSinglePost,
  
} from "../_Actions/singelPost"
import storage from '../_Config/Storage'
import {
  ADD_COMMENT,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  addComment,
  addCommentSuccess,
  addCommenrFailure
} from '../_Actions/addComment'

export const fetchCommentPost = (action$, state$, { post$ }) => {
  return action$
    .ofType(ADD_COMMENT)
    .pipe(
      mergeMap(action => post$('/comments',action.payload).pipe(
        mergeMap(response => {
              
              let dataComment = {
                body:response.data.message,
                email:response.data.email,
                name:response.data.name,
                id:Math.floor(Math.random()*(999-100+1)+100),
                postId:state$.value.singlePost.data.id
              }
              return of(addCommentSuccess(dataComment));
               
        }),
        catchError(error => {
          //console.log(error)
          return of(addCommenrFailure('Cannot add comment, please try again :)'))
        })
      ))
    )
}

export const openModalPostEpic = action$ => action$.ofType(OPEN_MODAL).pipe(
  map(action => typeof action.postId !== 'undefined' && action.open !== false
    ? fetchSinglePost(action.postId)
    : clearSinglePost()
  )
)

export const fetchSinglePostEpic = (action$, state$, { fetch$ }) => {
  return action$
    .ofType(FETCH_SINGLE_POST)
    .pipe(
      mergeMap(action => fetch$(`/posts/${action.id}`).pipe(
        mergeMap(post => fetch$(`/users/${post.data.userId}`).pipe(
          map(user => ({user: user.data, ...post.data})),
          mergeMap(post => fetch$(`/comments?postId=${post.id}`).pipe(
            map(comments => fetchSinglePostSuccess({comments: comments.data, ...post})),
            takeUntil(action$.ofType(CLEAR_SINGLE_POST)),
          ))
        ))
      )),
      catchError(error => {
        console.log(error)
        return of(fetchSinglePostFailure('Cannot get Post, please try again :)'))
      })
    )
}

export const createSinglePostEpic = (action$, state$, { post$ }) => {
  return action$
    .ofType(CREATE_SINGLE_POST)
    .pipe(
      mergeMap(action => post$('/posts', action.payload).pipe(
        map(response => {
          const post = {user: JSON.parse(storage.get('user')), ...response.data}
          return createSinglePostSuccess(post)
        }),
        catchError(error => {
          console.log(error)
          return of(createSinglePostFailure('Cannot get Post, please try again :)'))
        })
      ))
    )
}