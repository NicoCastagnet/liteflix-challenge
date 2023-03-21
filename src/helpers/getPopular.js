import axios from 'axios';

const getPopular = async () => {
  const result = await axios
    .get(
      'https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20'
    )
    .then((res) => res.data.results.slice(0, 4))
    .catch((err) => console.error(err));
  return result;
};

export default getPopular;
