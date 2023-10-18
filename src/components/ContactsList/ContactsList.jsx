import { ButtonWrapper, DeleteButton, Item, List } from './ContactsList.styled';
import { FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, handleFilter } from 'redux/selectors';
import { deleteContacts } from 'redux/actions';

export default function ContactsList() {
  const [contactsToDelete, setContactsToDelete] = useState([]);

  const filter = useSelector(handleFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleCheckboxStatus = selectedContact => {
    setContactsToDelete(
      contactsToDelete.includes(selectedContact)
        ? contactsToDelete.filter(contact => contact !== selectedContact)
        : [...contactsToDelete, selectedContact]
    );
  };

  const deleteChosenContacts = contactsToDelete => {
    dispatch(deleteContacts(contactsToDelete));
  };

  const reset = () => setContactsToDelete([]);

  return (
    <>
      <List>
        {contacts
          .filter(
            contact =>
              filter === '' ||
              contact.name.toLowerCase().includes(filter.toLowerCase().trim())
          )
          .map(contact => (
            <label key={contact.id}>
              <Item>
                <input
                  type="checkbox"
                  name="contactToDelete"
                  checked={contactsToDelete.includes(contact)}
                  onChange={() => handleCheckboxStatus(contact)}
                />
                <p>{`${contact.name}: ${contact.number} ${
                  contact.type ? `*${contact.type}*` : ''
                }`}</p>
              </Item>
            </label>
          ))}
      </List>

      <ButtonWrapper>
        <DeleteButton
          type="button"
          onClick={() => {
            if (contactsToDelete.length === 0)
              alert('Choose contact(s) to delete');
            else {
              deleteChosenContacts(contactsToDelete);
              reset();
            }
          }}
        >
          <FaTrashAlt className="icon" />
        </DeleteButton>
      </ButtonWrapper>
    </>
  );
}
