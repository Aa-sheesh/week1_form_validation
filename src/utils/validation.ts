
export const validateRequired = (value: string): string => {
  return value.trim() ? "" : "This field is required";
};

export const validateEmail = (email: string): string => {
  if (!email) return "Email is required";
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) ? "" : "Please enter a valid email address";
};

export const validatePassword = (password: string): string => {
  if (!password) return "Password is required";
  if (password.length < 8) return "Password must be at least 8 characters";
  
  // Check for at least one uppercase letter, one lowercase letter, one number, and one special character
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  
  if (!hasUpperCase) return "Password must contain at least one uppercase letter";
  if (!hasLowerCase) return "Password must contain at least one lowercase letter";
  if (!hasNumber) return "Password must contain at least one number";
  if (!hasSpecialChar) return "Password must contain at least one special character";
  
  return "";
};

export const validatePhoneNumber = (phoneNumber: string): string => {
  if (!phoneNumber) return "Phone number is required";
  
  // Basic phone number validation - numbers only with optional + at beginning
  const phoneRegex = /^[0-9+\s]+$/;
  if (!phoneRegex.test(phoneNumber)) return "Please enter a valid phone number";
  
  if (phoneNumber.replace(/\D/g, "").length < 10) return "Phone number must have at least 10 digits";
  
  return "";
};

export const validatePAN = (pan: string): string => {
  if (!pan) return "PAN number is required";
  
  // PAN format: ABCDE1234F (5 letters, 4 numbers, 1 letter)
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  return panRegex.test(pan) ? "" : "Please enter a valid PAN number (e.g., ABCDE1234F)";
};

export const validateAadhar = (aadhar: string): string => {
  if (!aadhar) return "Aadhar number is required";
  
  // Aadhar is 12 digits
  const aadharRegex = /^[0-9]{12}$/;
  return aadharRegex.test(aadhar) ? "" : "Please enter a valid 12-digit Aadhar number";
};
