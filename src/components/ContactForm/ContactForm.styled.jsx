import styled from 'styled-components';

export const TheForm = styled.form`
width: 250px;
padding: 20px;
display: flex;
align-items: center;
flex-direction: column;
border: 1px solid #333;
border-radius: 3px;
`;

export const Label = styled.label`

`;

export const Input = styled.input`
margin-left: 15px;
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 15px;
  padding: 5px;
  border: 1px solid #888;
  border-radius: 5px;
  &:focus-visible {
    outline: 1px solid #4b98f5;
  }
`;

export const SubmitBtn = styled.button`
  width: 120px;
  padding: 5px 10px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  background-color: #ddd;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: #4b98f5;
    color: #eee;
  }
`;