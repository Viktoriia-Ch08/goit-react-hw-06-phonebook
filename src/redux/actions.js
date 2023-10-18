export const addContact = data => {
  return {
    type: 'contacts/addContact',
    payload: data,
  };
};

export const deleteContacts = id => {
  return {
    type: 'contacts/deleteContact',
    payload: id,
  };
};

export const setFilter = value => {
  return {
    type: 'filter/setFilter',
    payload: value,
  };
};
