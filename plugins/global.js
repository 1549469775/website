import Vue from 'vue'

Vue.directive('stopsubmit',{
    inserted:function(el){
      el.addEventListener('submit',function(e){
        e.preventDefault();
      });
    }
  });