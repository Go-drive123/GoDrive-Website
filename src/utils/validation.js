// validation.js

export const validatePassword = (password, confirmPassword) => {
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
    if (password !== confirmPassword) {
      return { isValid: false, message: "Passwords do not match" };
    }
  
    if (!passwordRegex.test(password)) {
      return {
        isValid: false,
        message:
          "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character",
      };
    }
  
    return { isValid: true, message: "" };
  };
  