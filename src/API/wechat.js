import { getOpenId } from '@/API/index.js'

export function getSetting (auth, onSuccess, onFail) {
  mpvue.getSetting({
    success (res) {
      console.log(res)
      if (res.authSetting[`scope.${auth}`]) {
        onSuccess(res)
      } else {
        onFail(res)
      }
    },
    fail (res) {
      console.log(res) // 抛出异常
    }
  })
}

export function getUserInfo (onSuccess, onFail) {
  mpvue.getUserInfo({
    success (res) {
      console.log(res)
      const {userInfo} = res
      if (userInfo && userInfo.length !== 0) {
        onSuccess(userInfo)
      } else {
        onFail()
      }
    },
    fail (res) {
      console.log(res) // 抛出异常
    }
  })
}

export function setStorageSync (key, data) {
  mpvue.setStorageSync(key, data)
}

export function getStorageSync (key) {
  return mpvue.getStorageSync(key)
}

export function getUserOpenId (callback) {
  mpvue.login({
    success (res) {
      if (res.code) {
        getOpenId(res.code).then(response => {
          // console.log(response)
          const {
            data: {
              data: {
                openid
              }
            }} = response
          setStorageSync('openId', openid)
          callback && callback(openid)
        }).catch(err => console.log(err))
      } else {
        console.log(res) // 抛出异常
      }
    },
    fail (res) {
      console.log(res) // 抛出异常
    }
  })
}
