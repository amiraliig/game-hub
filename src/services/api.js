import axios from "axios";


const axiosApi = axios.create({
    baseURL:"https://api.rawg.io/api/",
    params:{
        key:"def692f5a921492fa3fc32fc21cce635"
    }
})
export default axiosApi