import axios from 'axios'

const http = axios.create({
    baseURL: 'https://few.e-spy.cn/admin/api'
})

export default http