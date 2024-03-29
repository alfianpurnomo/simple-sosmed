import {
  OPEN_MODAL,
  FETCH_SINGLE_POST,
  FETCH_SINGLE_POST_SUCCESS,
  FETCH_SINGLE_POST_FAILURE,
  CREATE_SINGLE_POST,
  CREATE_SINGLE_POST_SUCCESS,
  CREATE_SINGLE_POST_FAILURE,
  CLEAR_SINGLE_POST,
} from '../_Actions/singelPost'
import { ADD_COMMENT_SUCCESS,DELETE_COMMENT_SUCCESS } from '../_Actions/comment';

export const initialState = {
  open: false,
  loading: false,
  data: null,
  error: null
}

const singlePostReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        open: action.open,
      }
    case CREATE_SINGLE_POST:
    case FETCH_SINGLE_POST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case CLEAR_SINGLE_POST:
      return {
        ...state,
        loading: true,
        data: null
      }
    case CREATE_SINGLE_POST_SUCCESS:
      return {
        loading: false,
        data: null,
      }
    case FETCH_SINGLE_POST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      }
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          comments:[...state.data.comments,action.payload]
        },
        loading: false,
      }
    case DELETE_COMMENT_SUCCESS:
        
        return {
          ...state,
          data: {
            ...state.data,
            comments:[...state.data.comments.filter(comment => comment.id!==action.payload)]
          },
          loading: false,
        }
    case CREATE_SINGLE_POST_FAILURE:
    case FETCH_SINGLE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default singlePostReducer