import { HeaderSearchbar, SearchForm, Button, Input } from './Searchbar.styled';
import PropTypes from 'prop-types';

import { Formik } from 'formik';
import { GrSearch } from 'react-icons/gr';
import * as yup from 'yup';

const schema = yup.object().shape({
  search: yup.string().required(),
});

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, action) => {
    onSubmit(values);
    action.resetForm();
  };
  return (
    <HeaderSearchbar>
      <Formik
        initialValues={{ search: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <SearchForm>
          <Button type="submit">
            <GrSearch />
          </Button>
          <Input
            name="search"
            type="text"
            placeholder="Search images and photos"
            autoComplete="off"
            autoFocus
          ></Input>
        </SearchForm>
      </Formik>
    </HeaderSearchbar>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
