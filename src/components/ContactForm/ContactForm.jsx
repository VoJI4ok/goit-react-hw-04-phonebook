import {useState} from 'react';
import PropTypes from 'prop-types';
import { TheForm, Label, Input, SubmitBtn} from './ContactForm.styled';

const ContactForm = ({ saveDataToState }) => {
  const [name, setName] = useState('');

  const [number, setNumber] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    saveDataToState(name, number);
    
    e.target.reset();
  };

  const inputValueForm  = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
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
  saveDataToState: PropTypes.func.isRequired,
};