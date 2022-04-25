import request from './request'

export const menuRequest = (data) => {
  return request({
    url: '/menus'
  })
}
