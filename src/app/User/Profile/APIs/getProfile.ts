import Cookies from 'js-cookie';

export const getUserProfile = async () => {
  const authToken = Cookies.get('authToken');

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (authToken) {
    headers['Authorization'] = authToken;
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Users/get-user-profile`, {
    method: 'GET',
    headers: headers,
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user profile');
  }

  return response.json();
};
