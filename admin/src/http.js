import axios from 'axios';
import Vue from 'vue';
import router from './router';
const http = axios.create({
    baseURL: 'http://localhost:3000/admin/api'
})
http.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.authToken = `Bearer ${token}`;
    }
    return config;
}, function (error) {
    // Do something with request error
    Vue.prototype.$message({
        type: 'error',
        message: error.response.data.message
    })
    return Promise.reject(error);
});
http.interceptors.response.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    console.log(error.response)
    if (error.response.status === 412) {
        router.push('/login')
    }
    Vue.prototype.$message({
        type: 'error',
        message: error.response.data.message
    })
    return Promise.reject(error);
});
export default http;