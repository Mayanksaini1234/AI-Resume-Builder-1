import axios from "axios"

const API_KEY = import.meta.env.VITE_API_KEY;

const axiosClient = axios.create({
    baseURL: "http://localhost:1337/api/",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
    }
})


const createResume = (data) => axiosClient.post("/user-resumes1", data);
const getResume = (userEmail) => axiosClient.get('/user-resumes1?filters[userEmail][$eq]=' + userEmail);
const UpdateResume = (id, data) => axiosClient.put("user-resumes1/" + id, data)
export default {
    createResume,
    getResume,
    UpdateResume
}

