import axios from "axios";


const axiosApi = axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: "def692f5a921492fa3fc32fc21cce635"
    }
})
class APIClient {
    constructor(endpoint) {
        this.endpoint = endpoint

    }
    getAll = (config) => {
        return axiosApi.get(this.endpoint, config).then(response => {
         
            return response.data
        })
    }
}
export default APIClient