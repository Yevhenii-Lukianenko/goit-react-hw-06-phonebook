import { SearchLabel, SearchInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filtersSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <SearchLabel>
      Find contacts by name
      <SearchInput
        type="text"
        value={filterValue}
        onChange={changeFilter}
      ></SearchInput>
    </SearchLabel>
  );
};
