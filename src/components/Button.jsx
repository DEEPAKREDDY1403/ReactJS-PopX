import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  width: 100%;
  padding: 14px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, variant }) =>
    variant === 'secondary' ? theme.colors.secondary : theme.colors.primary};
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
    color: ${({ theme }) => theme.colors.white};
    cursor: not-allowed;
  }
`;

const Button = ({ children, onClick, type = 'button', variant = 'primary', disabled = false }) => {
  return (
    <StyledButton onClick={onClick} type={type} variant={variant} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;