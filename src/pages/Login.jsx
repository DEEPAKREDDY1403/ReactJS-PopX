import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

const LoginContainer = styled.div`
  padding-top: 40px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textLight};
  margin-top: 12px;
  margin-bottom: 28px;
  line-height: 1.5;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px; // A little gap between the last input and the button
`;

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { isValid } } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    navigate('/profile', { state: { user: { name: 'Marry Doe', email: data.email } } });
  };

  return (
    <LoginContainer>
      <Title>Signin to your PopX account</Title>
      <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Subtitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Placeholder props added here as well */}
        <Input label="Email Address" name="email" type="email" placeholder="Enter email address" register={register} required />
        <Input label="Password" name="password" type="password" placeholder="Enter password" register={register} required />
        
        <div style={{ marginTop: '10px' }}>
          <Button type="submit" disabled={!isValid}>Login</Button>
        </div>
      </Form>
    </LoginContainer>
  );
};

export default Login;