export const storage = {
  getItem: <T = any>(key: string) => {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item) as T;
    }
    return null;
  },

  setItem: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
    return value;
  },

  removeItem: <T = any>(key: string) => {
    const item = localStorage.getItem(key);
    localStorage.removeItem(key);
    
    if (item) {
      return JSON.parse(item) as T;
    }
  },
};
