import { get } from '@/utils/request.js'

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
