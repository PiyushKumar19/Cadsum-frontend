import Cookies from 'js-cookie';

export const getOrders = async () => {
  const authToken = Cookies.get('authToken');

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  
  if (authToken) {
    headers['Authorization'] = authToken; // Add header only if authToken exists
  }

  try {
    const response = await fetch('https://localhost:7214/api/Users/get-order-by-user', {
      method: 'GET',
      headers: headers,
    });

    if (!response.ok) {
      throw new Error('Failed to fetch orders');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};
