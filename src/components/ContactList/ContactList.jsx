import PropTypes from 'prop-types';
import { List, ListItem, Btn } from './ContactList.styled';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id} name={name} number={number}>
          {name}: {number}
          <Btn type="button" onClick={() => deleteContact(id)}>
            Delete
          </Btn>
        </ListItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
