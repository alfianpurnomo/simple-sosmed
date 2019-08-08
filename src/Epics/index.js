import { combineEpics } from 'redux-observable'
import fetchUserEpic from './user'
import fetchPostEpic from './post'
import {
  fetchCommentPost,
  openModalPostEpic,
  fetchSinglePostEpic,
  createSinglePostEpic,
} from './singlePost'
import fetchSingleUserEpic from './singleUser'
import { loginEpic } from './auth'
import {
  openModalAlbumEpic,
  fetchSingleAlbumEpic
} from './album'

export const rootEpic = combineEpics(
  fetchUserEpic,
  fetchCommentPost,
  fetchPostEpic,
  openModalPostEpic,
  fetchSinglePostEpic,
  createSinglePostEpic,
  fetchSingleUserEpic,
  loginEpic,
  openModalAlbumEpic,
  fetchSingleAlbumEpic
)