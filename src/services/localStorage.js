const LS_KEY = 'contacts';

export const getContactsFromLocalStorage = JSON.parse(
  localStorage.getItem(LS_KEY)
);

export const saveContactsToLocalStorage = contacts => {
  const stringifiedContacts = JSON.stringify(contacts);
  localStorage.setItem(LS_KEY, stringifiedContacts);
};
