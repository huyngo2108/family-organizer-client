import axios from 'axios';
import { Platform } from 'react-native';

const LAN = '192.168.1.50'; 
const initialBase = Platform.select({
  ios: `http://${LAN}:5247`,
  android: 'http://10.0.2.2:5247',
  default: 'http://localhost:5247',
})!;

const api = axios.create({
  baseURL: `${initialBase}/api`,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

export async function ensureServer(): Promise<string> {
  const candidates = Platform.select({
    ios: [`http://${LAN}:5247`, 'https://localhost:7226', 'http://localhost:5247'],
    android: ['http://10.0.2.2:5247'],
    default: ['http://localhost:5247', 'https://localhost:7226'],
  })!;

  for (const base of candidates) {
    try {
      const tmp = axios.create({ baseURL: base, timeout: 4000 });
      const res = await tmp.get('/api/auth/ping');
      if (res.status === 200) {
        api.defaults.baseURL = `${base}/api`;
        return base;
      }
    } catch {
    }
  }
  throw new Error('Server not reachable');
}

export default api;
