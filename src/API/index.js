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

export function hotSearch () {
  return get(`${API_DATA}/book/hot-search`)
}

export function detailBook (params) {
  return get(`${API_DATA}/book/detail`, params)
}

export function detailRate (params) {
  return get(`${API_DATA}/book/rank/save`, params)
}

export function detailContents (params) {
  return get(`${API_DATA}/book/contents`, params)
}

export function bookIsInShelf (params) {
  return get(`${API_DATA}/book/shelf/get`, params)
}

export function handleShelf (params) {
  return get(`${API_DATA}/book/shelf/save`, {
    shelf: JSON.stringify(params)
  })
}

export function removeShelf (params) {
  return get(`${API_DATA}/book/shelf/remove`, {
    shelf: JSON.stringify(params)
  })
}

export function searchList (params) {
  return get(`${API_DATA}/book/search-list`, params)
}

export function categoryList () {
  return get(`${API_DATA}/book/category/list/v2`)
}

export function readDay (params) {
  return get(`${API_DATA}/user/day`, params)
}
