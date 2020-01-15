import axios from 'axios'
const instance = axios.create({
    //baseURL: 'https://vuejs-axios-bfafd.firebaseio.com'
    baseURL: 'https://identitytoolkit.googleapis.com/v1'
    // this was cut: '/accounts:signUp?key=[API_KEY]'
})

// instance.defaults.headers.common['ABCD'] = 'ABCD'

export default instance