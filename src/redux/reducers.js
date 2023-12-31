import { getContactsFromLocalStorage } from 'services/localStorage';

const initialState = {
  contacts: getContactsFromLocalStorage ?? [],
  filter: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case 'contacts/deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(
          element => !action.payload.includes(element)
        ),
      };
    case 'filter/setFilter':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
