import { TOKEN_STORE_NAME } from '@/config/setting.js';

export function getToken() {
  const token = localStorage.getItem(TOKEN_STORE_NAME);
  return token ? token : '';
}

export function setToken(token) {
  removeToken();
  if (token) {
    localStorage.setItem(TOKEN_STORE_NAME, token);
  }
}

export function removeToken() {
  localStorage.removeItem(TOKEN_STORE_NAME);
}
