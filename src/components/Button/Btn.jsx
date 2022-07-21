import { Button } from './Button.styled';
import { Box } from 'components/Box';
import PropTypes from 'prop-types';

export const Btn = ({ onClick }) => {
  return (
    <Box width="100%" textAlign="center" my="10px">
      <Button onClick={onClick}>Load more</Button>
    </Box>
  );
};

Btn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
