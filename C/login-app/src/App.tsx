import styled from 'styled-components';
import { LoginForm } from './components/LoginForm';

function App() {
  const handleLogin = (data: { email: string; password: string }) => {
    console.log('Login data:', data);
  };

  return (
    <Container>
      <LoginForm onSubmit={handleLogin} />
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
