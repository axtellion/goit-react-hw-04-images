import { Component } from 'react';

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

export class App extends Component {
  state = {
    page: 1,
    search: '',
    images: [],
    loader: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      this.addImage();
    }
  }

  addImage = async () => {
    const { search, page } = this.state;
    this.setState({ loader: true });

    try {
      const images = await API.getFotoGallery(search, page);
      totalImages = images.total;
      if (totalImages === 0) {
        toast.error('nothing found');
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...images.hits],
      }));
    } catch (error) {
      console.log(error);
      this.setState({ loader: false });
      toast.error('Error, please reload the page');
    } finally {
      this.setState({ loader: false });
    }
  };

  addSearchName = ({ search }) => {
    this.setState({ search, page: 1, images: [] });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, loader } = this.state;

    return (
      <Box>
        <Searchbar onSubmit={this.addSearchName} />
        {loader && <Loader />}
        <ImageGallery items={images} />
        {images.length > 0 && images.length < totalImages && (
          <Btn onClick={this.loadMore} />
        )}
        <GlobalStyle />
        <ToastContainer theme="colored" />
      </Box>
    );
  }
}
