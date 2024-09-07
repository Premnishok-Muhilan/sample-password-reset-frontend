import axios from 'axios';

export const requestPasswordReset = async (email) => {
  try {
    const response = await axios.post('/api/password-reset-request', { email });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
};

export const resetPassword = async (token, newPassword) => {
  try {
    const response = await axios.post('/api/password-reset', { token, newPassword });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
};
