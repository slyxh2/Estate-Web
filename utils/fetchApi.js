import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';
const axiosInstance = axios.create({
    baseURL: 'https://bayut.p.rapidapi.com'
})
export const fetchApi = async (url) => {
    // console.log(process.env.NEXT_PUBLIC_RAPID_API_KEY)
    const { data } = await axiosInstance.get((url), {
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        },
    });

    return data;
}