import { Input } from 'components/ContactForm/ContactForm.styled';
import { FilterContainer, FilterLabel } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/actions';
import { handleFilter } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(handleFilter);
  const dispatch = useDispatch();

  const filterName = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <FilterContainer>
      <FilterLabel>
        Find contact name:
        <Input
          type="text"
          name="search"
          value={filter}
          onChange={filterName}
          placeholder="Adam Smith"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </FilterLabel>
    </FilterContainer>
  );
};

export default Filter;
