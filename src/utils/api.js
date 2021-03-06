import axios from 'axios'
import qs from 'qs'
import get from 'lodash/get'

import { removeAllAuth } from '@sdog/store/storage'

import { IS_DEV, IS_STAGE, BYPASS_LUA } from './env'

export { IS_DEV }
export const API_VERSION = 'v1'
export const LOCAL_API_ROOT = BYPASS_LUA
  ? `http://api.sdog.test:4000/${API_VERSION}`
  : `http://api.sdog.test/${API_VERSION}`

export const STAGE_API_ROOT = `https://api.dev.staffing.dog/${API_VERSION}`
export const PROD_API_ROOT = IS_STAGE
  ? STAGE_API_ROOT
  : `https://api.staffing.dog/${API_VERSION}`
export const API_ROOT = IS_DEV ? LOCAL_API_ROOT : PROD_API_ROOT

let lastUsedRequest = null

export const getLastUsedRequest = () => lastUsedRequest

const axiosInstance = axios.create({
  withCredentials: true,
  paramsSerializer: params => qs.stringify(params, { arrayFormat: 'brackets' }),
})

export const unauthorizedUser = () => {
  if (get(lastUsedRequest, 'url', false) !== `${API_ROOT}/login`) {
    removeAllAuth()
    window.location = '/logout'
  }
}

export const onErrorByStatus = res => {
  if (
    res.status === 401 ||
    (res.status === 400 && get(res, 'data.error_code', false) === '401_22')
  ) {
    unauthorizedUser()
  }
}

axiosInstance.interceptors.request.use(config => {
  lastUsedRequest = { ...config }
  return config
})

axiosInstance.interceptors.response.use(
  res => {
    if (res.status >= 400) {
      onErrorByStatus(res)

      return Promise.reject(res)
    }

    return Promise.resolve(res)
  },
  error => {
    onErrorByStatus(get(error, 'response', {}))

    return Promise.reject(error)
  },
)

export default axiosInstance
