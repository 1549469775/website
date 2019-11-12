import $api from '../api/index' ;
// onRequest(config)
// onResponse(response)
// onError(err)
// onRequestError(err)
// onResponseError(err)

export default function ({ $axios,store, redirect }) {
  // console.log($api);
  
  // store.commit('user/setToken','dasdsad')
  // let token = store.state.user.token;

  // $axios.setToken(token, 'Bearer')

  $axios.setHeader('Content-Type', 'application/json')

  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })
  $axios.onResponse(config => {
    if(!config.data.success){
      return Promise.reject(config.data)
    }
    return Promise.resolve(config)
  })
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
