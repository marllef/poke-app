/**
 *  - Cria um banco de dados utilizando como base o localStorage
 *    e adapta alguns metodos para facilitar a utilização.
 *
 *  - Converte os dados armazenados entre os formatos json e object.
 */
export const storage = {
  // busca um item no localStorage
  getItem: <T = any>(key: string) => {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item) as T;
    }
    return null;
  },

  // guarda um item no localStorage
  setItem: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
    return value;
  },

  // remove um item do localStorage
  removeItem: <T = any>(key: string) => {
    const item = localStorage.getItem(key);
    localStorage.removeItem(key);

    if (item) {
      return JSON.parse(item) as T;
    }
  },
};
