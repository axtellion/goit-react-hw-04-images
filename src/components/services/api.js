import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '27622242-cbec71a151523d388e74fe919';

export const getFotoGallery = async (values, page) => {
  const responce = await axios.get(
    `?q=${values}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return responce.data;
};
