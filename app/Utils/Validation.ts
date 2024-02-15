export const validateEmail = (email: string) => {
  // Regular expression for validating email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string) => {
    // Password must be at least 8 characters long
    // Must contain at least one uppercase letter
    // Must contain at least one number
    // Must contain at least one special character
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  };