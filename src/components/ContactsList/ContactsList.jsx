import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { List } from './ContactsList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.array.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  return (
    <List>
      {getVisibleContacts().map(contact => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </List>
  );
};
