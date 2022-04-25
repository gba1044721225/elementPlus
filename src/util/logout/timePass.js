import { tokenTime, tokenDuration } from './common'

export const getTokenTime = () => {
  localStorage.getItem(tokenTime)
  return localStorage.getItem(tokenTime)
}

export const setTokenTime = () => {
  localStorage.setItem(tokenTime, new Date().getTime())
}

export const isPassTime = () => {
  return new Date() - getTokenTime() > tokenDuration
}
