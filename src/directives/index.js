import Ripple from './ripple'

export default {
  install: (app) => {
    app.directive('ripple', Ripple)
  },
}
