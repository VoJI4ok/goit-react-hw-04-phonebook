import PropTypes from 'prop-types';
import { FilterInput } from './Filter.styled';
 function Filter({ value, change }) {
  return (
      <FilterInput name="filter" value={value} onChange={change} type="text" />
  );
}
export default Filter;
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};