import axios from 'axios';

const axiosInstance = () => {
    const instance = axios.create({
        baseURL: process.env.NEXT_API_BASE_URL,
    });

    instance.interceptors.response.use(
        (response) => {
            const { errorMessage ,status } = response?.data

            if(response.status === 200){
                // handleSetError(errorMessage);
            }
            return response;
        },
        (error) => {
            // Handle any errors here
            const { status } = error?.response
            const { Message ,errorMessage } = error?.response?.data

            if(status === 401){
                //remove token
                return Promise.reject(error.response.data);
            }

            if (error.response) {
                return Promise.reject(error.response.data);
            } else if (error.request) {
                return Promise.reject('Network Error');
            } else {
                return Promise.reject(error.message);
            }
        }
    );

    return instance;
};

export default axiosInstance;