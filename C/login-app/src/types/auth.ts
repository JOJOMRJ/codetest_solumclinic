// User credentials type
export interface UserCredentials {
  email: string;
  password: string;
}

// Hardcoded valid users for demo purposes
export const VALID_USERS: UserCredentials[] = [
  { email: 'test@example.com', password: 'Test123!@#' },
  { email: 'admin@example.com', password: 'Admin123!@#' },
  { email: 'user@example.com', password: 'User123!@#' },
];
