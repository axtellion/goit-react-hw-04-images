import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ items }) => {
  return (
    <List>
      {items.map(item => {
        console.log(item);
        return (
          <ImageGalleryItem
            key={item.id}
            img={item.webformatURL}
            tags={item.tags}
            modalImg={item.largeImageURL}
          />
        );
      })}
    </List>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
};
