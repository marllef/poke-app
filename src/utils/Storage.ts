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

  removeItem: (key: string) => {
    localStorage.removeItem(key);
  },
};
