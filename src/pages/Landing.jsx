import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

// The container now uses absolute positioning to stick to the bottom
const LandingContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 24px 40px 24px; // Add padding to create space from the edges
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 28px;
  line-height: 1.5;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Landing = () => {
  const navigate = useNavigate();

  return (
    // The empty parent div is no longer needed with absolute positioning
    <LandingContainer>
      <Title>Welcome to PopX</Title>
      <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Subtitle>
      <ButtonContainer>
        <Button onClick={() => navigate('/register')}>Create Account</Button>
        <Button variant="secondary" onClick={() => navigate('/login')}>
          Already Registered? Login
        </Button>
      </ButtonContainer>
    </LandingContainer>
  );
};

export default Landing;