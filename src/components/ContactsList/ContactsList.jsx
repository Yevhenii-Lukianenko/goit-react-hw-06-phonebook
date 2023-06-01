import PropTypes from 'prop-types';
import { List } from './ContactsList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactsList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
