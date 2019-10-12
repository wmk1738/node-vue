import axios from 'axios';
import Vue from 'vue';
import router from './router';

const http = axios.create({
    // baseURL:'http://localhost:5000/admin/api'
    baseURL:process.env.NODE_VUE_PATH ||'/admin/api'
})
http.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.authToken = `Bearer ${token}`;
    }
    return config;
}, function (error) {
    Vue.prototype.$message({
        type: 'error',
        message: error.response.data.message
    })
    return Promise.reject(error);
});
http.interceptors.response.use(function (config) {
    return config;
}, function (error) {
    if (error.response.status === 412) {
        router.push('/login');
        localStorage.clear();
    }
    Vue.prototype.$message({
        type: 'error',
        message: error.response.data.message
    })
    return Promise.reject(error);
});
export default http;