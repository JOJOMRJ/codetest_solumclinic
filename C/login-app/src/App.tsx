import { useState } from 'react';
import styled from 'styled-components';
import { LoginForm } from './components/LoginForm';
import { WelcomePage } from './components/WelcomePage';
import { VALID_USERS } from './types/auth';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { user, login, logout } = useAuth();
  const [loginError, setLoginError] = useState<string>('');

  const handleLogin = (data: { email: string; password: string }) => {
    // Check if email exists in valid users
    const validUser = VALID_USERS.find((u) => u.email === data.email);

    if (!validUser) {
      setLoginError('Email does not exist');
      return;
    }

    // Check if password matches
    if (validUser.password !== data.password) {
      setLoginError('Incorrect password');
      return;
    }

    // Login successful
    setLoginError('');
    login(data.email);
  };

  const handleLogout = () => {
    logout();
    setLoginError('');
  };

  return (
    <Container>
      {user ? (
        <WelcomePage email={user} onLogout={handleLogout} />
      ) : (
        <LoginForm onSubmit={handleLogin} error={loginError} />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

export default App;
