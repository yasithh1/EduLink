<<<<<<< HEAD
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/questions';

export const getQuestions = () => {
    return axios.get(API_URL);
};

export const createQuestion = (questionData) => {
    return axios.post(API_URL, questionData);
};
=======
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/questions';

export const getQuestions = () => {
    return axios.get(API_URL);
};

export const createQuestion = (questionData) => {
    return axios.post(API_URL, questionData);
};
>>>>>>> 794c63ecd842c809bf7d3409a8321b07854baa35
