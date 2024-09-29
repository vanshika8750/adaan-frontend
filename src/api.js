import axios from 'axios';

const API_URL = 'https://adaan-backend.onrender.com/api';

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/register`, userData);
  return response.data;
};

export const sendOtp = async (otpData) => {
  const response = await axios.post(`${API_URL}/auth/send-otp`, otpData);
  return response.data;
};

export const verifyOtp = async ({ email, otp }) => {
  console.log({email,otp});
  const response = await axios.post(`${API_URL}/auth/verify-otp`, { email, otp });
  return response.data; 
};

export const loginUser = async (loginData) => {
  const response = await axios.post(`${API_URL}/auth/login`, loginData);
  return response.data;
};

export const getUserProfile = async (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }, 
  };
  const response = await axios.get(`${API_URL}/profile/me`, config);
  return response.data;
};

export const updateUserProfile = async (token, profileData) => {
  const response = await fetch(`${API_URL}/profile/update`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(profileData),
  });

  if (!response.ok) {
    throw new Error('Failed to update profile');
  }

  return await response.json();
};
