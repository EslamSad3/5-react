import axios from 'axios';

const apiKey = '357d46d3b0be23510eb44a285e06602a';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: apiKey,
  },
});

export default instance;

// import axios from 'axios';

// const apiKey = '70784c3c147a97e89318635d3a767fb1';

// const instance = axios.create({
//   baseURL: process.env.REACT_APP_API_BASE_URL,
//   params: {
//     api_key: apiKey,
//   },
// });

// export default instance;
