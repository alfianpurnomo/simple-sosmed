import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { from } from 'rxjs'
import axios from '../_Config/API'

import rootReducer from '../Reducers/'
import { rootEpic } from '../Epics/'

const epicMiddleware = createEpicMiddleware({
  dependencies: {
    fetch$: url => from(axios.get(url)),
    post$: (url, data, options = {}) => from(axios.post(url, data, options)),
  }
})
const store = createStore(rootReducer, applyMiddleware(epicMiddleware))
epicMiddleware.run(rootEpic)

export default store