import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import {ContactElement} from '../ContactEl/ContactEl'
 function ContactList({ contacts, deleteContact }) {
  return (
    <>
      <h2>Contacts</h2>
      <List>
        {contacts.map(item => (
          <ContactElement
            deleteContact={deleteContact}
            id={item.id}
            key={item.id}
            name={item.name}
            number={item.number}
          />
        ))}
      </List>
    </>
  );
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};