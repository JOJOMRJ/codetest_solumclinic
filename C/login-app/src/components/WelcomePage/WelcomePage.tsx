import styled from 'styled-components';

interface WelcomePageProps {
  email: string;
  onLogout: () => void;
}

export function WelcomePage({ email, onLogout }: WelcomePageProps) {
  return (
    <WelcomeBox>
      <Title>Welcome, {email}!</Title>
      <LogoutButton onClick={onLogout}>Logout</LogoutButton>
    </WelcomeBox>
  );
}

// Styled components
const WelcomeBox = styled.div`
  padding: 3rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 640px) {
    padding: 2rem;
    margin: 1rem;
  }
`;

const Title = styled.h1`
  margin: 0 0 2rem;
  font-size: 2rem;
  font-weight: 600;
  color: #333;

  @media (max-width: 640px) {
    font-size: 1.5rem;
    margin: 0 0 1.5rem;
  }
`;

const LogoutButton = styled.button`
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background-color: #ef4444;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #dc2626;
  }

  &:active {
    background-color: #b91c1c;
  }
`;
