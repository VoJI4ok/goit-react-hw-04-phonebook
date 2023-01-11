import PropTypes from 'prop-types';
import { DeleteBtn, ContactLi } from '../ContactList/ContactList.styled';

export function ContactElement({ name, number, id, deleteContact }) {
  return (
    <ContactLi>
      {name}: {number}
      <DeleteBtn onClick={deleteContact} data-id={id}>
        Delete
      </DeleteBtn>
    </ContactLi>
  );
}

ContactElement.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};