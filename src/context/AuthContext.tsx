import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api, { TOKEN_KEY, AuthResponse, User } from '../services/api';
import axios from 'axios';

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, username: string, password: string, fullName?: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshMe: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({} as any);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const token = await AsyncStorage.getItem(TOKEN_KEY);
        if (token) await refreshMe();
      } catch {}
      finally { setLoading(false); }
    })();
  }, []);

  const refreshMe = async () => {
    const res = await api.get<{ user: User }>('/auth/me');
    setUser(res.data.user);
  };

  const login = async (email: string, password: string) => {
    try {
      const res = await api.post<AuthResponse>('/auth/login', { email, password });
      await AsyncStorage.setItem(TOKEN_KEY, res.data.token);
      setUser(res.data.user);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 401) {
        throw new Error('INVALID_CREDENTIALS');
      }
      throw new Error('LOGIN_FAILED');
    }
  };

  const register = async (email: string, username: string, password: string, fullName?: string) => {
    try {
      const res = await api.post<AuthResponse>('/auth/register', { email, username, password, fullName });
      await AsyncStorage.setItem(TOKEN_KEY, res.data.token);
      setUser(res.data.user);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 409) {
        const field = (err.response.data as any)?.field;
        if (field === 'email') throw new Error('EMAIL_TAKEN');
        if (field === 'username') throw new Error('USERNAME_TAKEN');
      }
      throw new Error('REGISTER_FAILED');
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem(TOKEN_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, refreshMe }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
