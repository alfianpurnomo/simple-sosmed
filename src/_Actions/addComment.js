export const ADD_COMMENT = 'ADD_COMMENT'
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS'
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'

export const addComment = (payload) => ({
  type: ADD_COMMENT,
  payload
})

export const addCommentSuccess = payload => ({
  type: ADD_COMMENT_SUCCESS,
  payload
})

export const addCommenrFailure = payload => ({
  type: ADD_COMMENT_FAILURE,
  payload
})