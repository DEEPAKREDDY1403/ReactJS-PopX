import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

const CreateAccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
`;

const Form = styled.form`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding-top: 24px;
`;

const RadioGroup = styled.div`
  margin-bottom: 20px;

  p {
    font-size: 14px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
  }

  div {
    display: flex;
    gap: 20px;
  }

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
  }
`;

const CreateAccount = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { isValid } } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    navigate('/profile', { state: { user: { name: data.fullName, email: data.email } } });
  };

  return (
    <CreateAccountContainer>
      <Title>Create your PopX account</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Each Input now has a `placeholder` prop */}
        <Input label="Full Name" name="fullName" placeholder="Marry Doe" register={register} required />
        <Input label="Phone number" name="phone" type="tel" placeholder="Marry Doe" register={register} required />
        <Input label="Email address" name="email" type="email" placeholder="Marry Doe" register={register} required />
        <Input label="Password" name="password" type="password" placeholder="Marry Doe" register={register} required />
        <Input label="Company name" name="company" placeholder="Marry Doe" register={register} />
        
        <RadioGroup>
          <p>Are you an Agency?<span style={{color: 'red'}}>*</span></p>
          <div>
            <label>
              <input type="radio" value="yes" {...register('agency', { required: true })} /> Yes
            </label>
            <label>
              <input type="radio" value="no" {...register('agency', { required: true })} /> No
            </label>
          </div>
        </RadioGroup>
        
        <div style={{ marginTop: 'auto' }}>
          <Button type="submit" disabled={!isValid}>Create Account</Button>
        </div>
      </Form>
    </CreateAccountContainer>
  );
};

export default CreateAccount;