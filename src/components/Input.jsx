import styled from 'styled-components';
import PropTypes from 'prop-types';

// A container for the label and the input field
const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 15px; // Space between each form field
  display: flex;
  flex-direction: column;
`;

// Styles for the <label> element that sits above the input
const StyledLabel = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary}; // The label text is purple
  margin-bottom: 8px; // Space between the label and the input box
  font-weight: 500;
`;

// Styles for the <input> element itself
const StyledInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.background};
  font-size: 16px;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.text};
  transition: border-color 0.2s ease;

  // Style for the placeholder text inside the input
  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
  }

  // On focus, the border turns purple
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

// A small component for the red required asterisk
const RequiredMark = styled.span`
  color: #DD0000;
  margin-left: 2px;
`;

// The updated Input component now takes a 'placeholder' prop
const Input = ({ label, type = 'text', name, register, required, placeholder }) => {
  return (
    <InputContainer>
      <StyledLabel htmlFor={name}>
        {label}
        {required && <RequiredMark>*</RequiredMark>}
      </StyledLabel>
      <StyledInput
        id={name}
        type={type}
        {...register(name, { required })}
        placeholder={placeholder}
      />
    </InputContainer>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string, // Added placeholder to prop types
};

export default Input;