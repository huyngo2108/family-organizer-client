import axios from 'axios';
import { Platform } from 'react-native';

const BASE_URL = Platform.select({
  ios: 'https://localhost:7226',  
  android: 'http://10.0.2.2:5247', 
  default: 'http://localhost:5247',
})!;

const api = axios.create({
  baseURL: `${BASE_URL}/api`,
  headers: { 'Content-Type': 'application/json' },
  timeout: 15000,
});

export default api;
