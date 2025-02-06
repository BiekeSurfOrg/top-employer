import axios from 'axios';
const API_URL = process.env.REACT_APP_API_ENDPOINT;
export async function updateViews(page) {
    try {
        const response = await axios.post(API_URL + '/results/' + page);
        return response.data;
    } catch (error) {
        console.error('Error updating views:', error);
        throw error;
    }
}