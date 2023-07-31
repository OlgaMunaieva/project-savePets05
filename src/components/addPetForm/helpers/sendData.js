import axios from 'axios';
const sendData = async (formData, endpoint) => {
  try {
    // /api/pet
    const response = await axios.post(endpoint, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to send data to the backend');
  }
};

export default sendData;
