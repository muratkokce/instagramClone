export const usernameValidation = username => {
  if (!username) {
    return 'Username cannot be empty!';
  }
  if (username.length < 3) {
    return 'Invalid username!';
  }
  return null;
};

export const passwordValidation = password => {
  if (!password) {
    return 'Password cannot be empty!';
  }
  if (password.length < 3) {
    return 'Invalid password!';
  }
  return null;
};
