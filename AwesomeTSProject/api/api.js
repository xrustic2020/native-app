const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getUserList = async () => {
  try {
    const data = await fetch(`${BASE_URL}/users`);
    return data.json();
  } catch (error) {
    console.error('Somesing wrong, error:', error);
  }
};
