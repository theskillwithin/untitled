import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { findLoading, findError, setType, clearError } from '../../store/steps'
import {
  findRegisterError,
  clearRegisterUserError,
  findToken,
} from '../../../../store/user'

import Layout from './Layout'

export default withRouter(
  connect(
    state => ({
      loading: findLoading(state),
      error: findError(state),
      findRegisterError: findRegisterError(state),
      token: findToken(state),
    }),
    { setType, clearError, clearRegisterUserError },
  )(Layout),
)
