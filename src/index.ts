import { log, warn } from 'loglevel'

function hello() {
  log('hey')
}

hello()

function hello2() {
  warn('another error')
}
hello2()

export {}
