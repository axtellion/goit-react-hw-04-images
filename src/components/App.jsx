import { useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { Loader } from './Loader/Loader';

import * as API from './services/api';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Btn } from './Button/Btn';

let totalImages;

export const App = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (!search) {
      return;
    }

    const addImage = async () => {
      setLoader(true);
      try {
        const images = await API.getFotoGallery(search, page);
        totalImages = images.total;

        if (totalImages === 0) {
          toast.error('nothing found');
        }
        setImages(prevState => [...prevState, ...images.hits]);
      } catch (error) {
        console.log(error);
        setLoader(false);
        toast.error('Error, please reload the page');
      } finally {
        setLoader(false);
      }
    };
    addImage();
  }, [search, page]);

  const addSearchName = ({ search }) => {
    setSearch(search);
    setPage(1);
    setImages([]);
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <Box>
      <Searchbar onSubmit={addSearchName} />
      {loader && <Loader />}
      <ImageGallery items={images} />
      {images.length > 0 && images.length < totalImages && (
        <Btn onClick={loadMore} />
      )}
      <GlobalStyle />
      <ToastContainer theme="colored" />
    </Box>
  );
};
