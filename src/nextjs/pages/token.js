import axios from 'axios';

async function getLiffAccessToken(code) {

  const url = 'https://api.line.me/v2/oauth/accessToken';
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  const data = {
    grant_type: 'client_credentials',
    client_id: "1657764194",
    client_secret: "abed5a155c6ee69d28e7e0e3293f2902",
  };
  try {
    const response = await axios.post(url, new URLSearchParams(data), { headers });
    const accessToken = response.data.access_token;
	// console.log(accessToken, "accessToken");
    return accessToken;
  } catch (error) {
    console.error(error);
  }
}

export default getLiffAccessToken;
