import PropTypes from 'prop-types';
import { List, Item, ContactText, Button } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDelete }) => (
  <List>
    {contacts.map(contact => (
      <Item key={contact.id}>
        <ContactText>
          {contact.name}: {contact.number}
        </ContactText>
        <Button
          type="button"
          onClick={() => {
            onDelete(contact.id);
          }}
        >
          Delete
        </Button>
      </Item>
    ))}
  </List>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
