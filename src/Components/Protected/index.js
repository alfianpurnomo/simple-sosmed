import storage from '../../_Config/Storage'

const Protected = ({children, alternative}) =>
  storage.has('user') ? children : alternative

Protected.defaultProps = {
  alternative: null
}

export default Protected