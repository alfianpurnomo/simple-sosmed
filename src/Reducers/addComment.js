import {
  ADD_COMMENT,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
} from '../_Actions/addComment'

export const initialState = {
  loading: false,
  data: [],
  error: null
}

const addCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      }
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default addCommentReducer