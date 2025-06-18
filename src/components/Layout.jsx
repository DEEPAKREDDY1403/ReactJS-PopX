import styled from 'styled-components';
import PropTypes from 'prop-types';

const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const MobileView = styled.div`
  width: 375px; // A standard mobile width
  min-height: 812px; // A standard mobile height
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  padding: 24px;
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <MobileView>{children}</MobileView>
    </LayoutContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;