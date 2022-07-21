import { CirclesWithBar } from 'react-loader-spinner';
import { Box } from 'components/Box';

export const Loader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <CirclesWithBar color="blue" ariaLabel="circles-with-indicator" />
    </Box>
  );
};
