import Vue from 'vue'

Vue.directive('focus', {
  inserted: function (el) {
    el.focus();
  }
});
Vue.directive('stopsubmit', {
  inserted: function (el) {
    el.addEventListener('submit', function (e) {
      e.preventDefault();
    });
  }
});