import { SearchLabel, SearchInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <SearchLabel>
      Find contacts by name
      <SearchInput type="text" onChange={changeFilter}></SearchInput>
    </SearchLabel>
  );
};
