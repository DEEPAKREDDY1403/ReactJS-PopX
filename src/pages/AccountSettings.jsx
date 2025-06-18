import styled from 'styled-components';
import { useLocation, Navigate } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa';
import userProfileImage from '../assets/images/user-profile.png';

const SettingsContainer = styled.div`
  padding-top: 20px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 24px;
`;

const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
`;

const ProfileImageWrapper = styled.div`
  position: relative;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

const CameraIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const UserInfo = styled.div`
  h2 {
    font-size: 18px;
    font-weight: 500;
  }
  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

const LorempIpsum = styled.p`
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textLight};
  border-bottom: 1px dashed ${({ theme }) => theme.colors.border};
  padding-bottom: 40px;
`;

const AccountSettings = () => {
  const location = useLocation();
  const user = location.state?.user;

  // If no user data is passed (e.g., direct navigation), redirect to landing
  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <SettingsContainer>
      <Title>Account Settings</Title>
      <ProfileCard>
        <ProfileImageWrapper>
          <ProfileImage src={userProfileImage} alt="User Profile" />
          <CameraIcon>
            <FaCamera size={12} />
          </CameraIcon>
        </ProfileImageWrapper>
        <UserInfo>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </UserInfo>
      </ProfileCard>
      <LorempIpsum>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </LorempIpsum>
    </SettingsContainer>
  );
};

export default AccountSettings;