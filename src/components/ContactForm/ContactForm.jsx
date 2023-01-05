import {useState} from 'react';
import PropTypes from 'prop-types';
import { TheForm, Label, Input, SubmitBtn} from './ContactForm.styled';

function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    addContact({ name, number });
    reset();
  };
  const inputValueForm = e => {
    const { value } = e.target;
    switch (e.target.name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  }; 

    return (
      <TheForm onSubmit={handleSubmit}>
        <Label htmlFor="name">
          Name
          <Input
            onChange={inputValueForm}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
          />
        </Label>

        <Label htmlFor="number">
          Number
          <Input
            onChange={inputValueForm}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
          />
        </Label>

        <SubmitBtn type="submit">Add Contact</SubmitBtn>
      </TheForm>
    );
  }

export default ContactForm;
ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};