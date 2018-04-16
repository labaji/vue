//引入vue 
import Vue from 'vue'
import moment from 'moment'

//
Vue.filter('date', (input,formatStr='YYYY-MM-DD HH:MM:SS') => {
    return moment(input).format(formatStr)
})