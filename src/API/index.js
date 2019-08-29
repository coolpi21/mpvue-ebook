import { get, post } from '@/utils/request.js'
import {APP_ID, APP_SECRET} from '@/utils/const.js'

const API_DATA = 'https://test.youbaobao.xyz:18081'

export function getIndexData (params) {
  return get(`${API_DATA}/book/home/v2`, params)
}

export function recommend () {
  return get(`${API_DATA}/book/home/recommend/v2`)
}

export function freeRead () {
  return get(`${API_DATA}/book/home/freeRead/v2

`)
}

export function hotBook () {
  return get(`${API_DATA}/book/home/hotBook/v2`)
}

export function getOpenId (code) {
  return get(`${API_DATA}/openId/get`, {
    appId: APP_ID,
    code: code,
    secret: APP_SECRET
  })
}

export function register (openId, userInfo) {
  return post(`${API_DATA}/user/register`, {
    openId: openId,
    platform: mpvuePlatform,
    ...userInfo
  })
}

export function search (params) {
  return get(`${API_DATA}/book/search`, params)
}
