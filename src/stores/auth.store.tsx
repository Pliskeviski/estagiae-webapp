import create from 'zustand';

interface IAuthState {
  email: string;
  password: string;
  isLoggedIn: boolean;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const useAuthStore = create<IAuthState>((set) => ({
  email: '',
  password: '',
  isLoggedIn: false,
  setEmail: (email: string) => {
    set((state) => ({
      ...state,
      email,
    }));
  },
  setPassword: (password: string) => {
    set((state) => ({
      ...state,
      password,
    }));
  },
  setIsLoggedIn: (isLoggedIn: boolean) => {
    set((state) => ({
      ...state,
      isLoggedIn,
    }));
  },
}));

export default useAuthStore;
