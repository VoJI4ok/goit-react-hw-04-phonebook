import PropTypes from 'prop-types';
import { DeleteBtn,ContactLi, } from './ContactList.styled';
const ContactList = ({ filttredContacts, removeContact }) => {
  return (
    <ul>
      {filttredContacts.map(({ name, number, id }) => {
        return (
          <ContactLi key={id}>
            {name} : {number}
            <DeleteBtn
              type="button"
              onClick={() => {
                removeContact(id);
              }}
            >
              Delete
            </DeleteBtn>
          </ContactLi>
        );
      })}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  filttredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};