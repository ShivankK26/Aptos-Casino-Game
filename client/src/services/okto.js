import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
const clientApiKey = process.env.NEXT_PUBLIC_CLIENT_ID
const authToken = process.env.NEXT_PUBLIC_CLIENT_SECRET;

const getPortfolio = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/v1/portfolio`, {
      headers: {
        'x-api-key': clientApiKey,
        'Authorization': `Bearer ${authToken}`,
        'accept': 'application/json',
      }
    });
    console.log(response.data); 
    return response.data;
  } catch (error) {
    console.error('Request failed:', error);
    throw error; 
  }
};

// Usage example:
getPortfolio().then(data => {
  console.log('Portfolio data:', data);
}).catch(error => {
  console.error('Error fetching portfolio data:', error);
});
