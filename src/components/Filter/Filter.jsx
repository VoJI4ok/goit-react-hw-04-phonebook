import PropTypes from 'prop-types';
import { FilterInput } from './Filter.styled';
const Filter = ({ inputValueForm, value }) => {
  return (
    <FilterInput onChange={inputValueForm} type="text" name="filter" value={value} />
  );
};

export default Filter;

Filter.propTypes = {
  inputValueForm: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};