import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { List, Item, ContactText, Button } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDelete }) => (
  <List>
    {contacts.map(contact => (
      <Item key={nanoid()}>
        <ContactText>
          {contact.name}: {contact.number}
        </ContactText>
        <Button
          type="button"
          onClick={() => {
            onDelete(contact.number);
          }}
        >
          Delete
        </Button>
      </Item>
    ))}
  </List>
);

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
