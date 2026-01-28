import { STORAGE_KEYS } from "@/constants";
import axios from "axios";

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA4OSIsIkhldEhhblN0cmluZyI6IjE2LzA2LzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc4MTU2ODAwMDAwMCIsIm5iZiI6MTc1MjE2NjgwMCwiZXhwIjoxNzgxNzE1NjAwfQ.mOZ8QXtQcrK3w7Q91zBJ9m8gtGvszmSf0brRhVEf_S0'
const Bearer = `Bearer ${localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN) ||''}`
const apiInstance = axios.create({
    baseURL: 'https://movienew.cybersoft.edu.vn/api',
    headers: {
        'Authorization': Bearer,
        'TokenCybersoft': TOKEN,
    }
})
apiInstance.interceptors.request.use(
    // data trả về nếu thành công
    (res) => res,


    // xử lý 401 
    (error) => {
        if (error.response?.status === 401) {
            // logout user
            // chuyển hướng về trang đăng nhập
        }
    }
        

    // gọi api refresh token ở đây nếu muốn
)
export default apiInstance;
