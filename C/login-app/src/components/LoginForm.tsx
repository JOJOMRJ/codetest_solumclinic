import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styled from 'styled-components';

// Zod validation schema
const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(16, 'Password must be at most 16 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one symbol'),
});

type LoginFormData = z.infer<typeof loginSchema>;

interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void;
  error?: string;
}

export function LoginForm({ onSubmit, error }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <FormContainer>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            $hasError={!!errors.email}
          />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            {...register('password')}
            $hasError={!!errors.password}
          />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
        </FormGroup>

        {error && <ErrorText>{error}</ErrorText>}

        <Button type="submit">Login</Button>

        <ForgotPasswordLink href="#">Forgot password?</ForgotPasswordLink>
      </Form>
    </FormContainer>
  );
}

// Styled components
const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 640px) {
    padding: 1.5rem;
    margin: 1rem;
    max-width: calc(100% - 2rem);
  }
`;

const Title = styled.h1`
  margin: 0 0 1.5rem;
  font-size: 1.75rem;
  font-weight: 600;
  color: #333;
  text-align: center;

  @media (max-width: 640px) {
    font-size: 1.5rem;
    margin: 0 0 1.25rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #555;
`;

const Input = styled.input<{ $hasError?: boolean }>`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid ${(props) => (props.$hasError ? '#ef4444' : '#ddd')};
  border-radius: 4px;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.$hasError ? '#ef4444' : '#3b82f6')};
  }
`;

const ErrorText = styled.span`
  font-size: 0.875rem;
  color: #ef4444;
`;

const Button = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background-color: #3b82f6;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 0.5rem;

  &:hover {
    background-color: #2563eb;
  }

  &:active {
    background-color: #1d4ed8;
  }
`;

const ForgotPasswordLink = styled.a`
  font-size: 0.875rem;
  color: #3b82f6;
  text-align: center;
  text-decoration: none;
  margin-top: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;
