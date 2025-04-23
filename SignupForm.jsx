import React, { useState } from 'react';
import './styles.css';

const SignupForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Validation errors state
  const [errors, setErrors] = useState({});
  
  // Success message state
  const [successMessage, setSuccessMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validate form
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    // Validate full name
    if (!formData.fullName.trim()) {
      tempErrors.fullName = "Full name is required";
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email.trim())) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Validate password
    if (!formData.password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      tempErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    }

    // Validate password confirmation
    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (validateForm()) {
      try {
        // Here you would typically send data to your server
        // For demonstration, we're simulating an AJAX request
        
        // Simulate API call with timeout
        setSuccessMessage("Processing...");
        
        // Simulating server response time
        setTimeout(() => {
          setSuccessMessage("Signup successful! Redirecting to login page...");
          
          // Redirect to login page after successful signup
          setTimeout(() => {
            window.location.href = "login-react.html";
          }, 1500);
        }, 1000);
        
        // In a real application, you would use fetch or axios:
        /*
        const response = await fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (response.ok) {
          setSuccessMessage("Signup successful! Redirecting to login page...");
          setTimeout(() => {
            window.location.href = "login-react.html";
          }, 1500);
        } else {
          const errorData = await response.json();
          setErrors({ submit: errorData.message || 'Signup failed' });
        }
        */
      } catch (error) {
        setErrors({ submit: "An error occurred during signup. Please try again." });
      }
    }
  };

  // Google signup handler
  const handleGoogleSignup = () => {
    // Implement Google OAuth integration
    alert("Google signup integration would be implemented here");
  };
  
  // Facebook signup handler
  const handleFacebookSignup = () => {
    // Implement Facebook OAuth integration
    alert("Facebook signup integration would be implemented here");
  };

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errors.submit && <div className="error-message">{errors.submit}</div>}
      
      <form id="signupForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            type="text" 
            name="fullName" 
            placeholder="Full Name" 
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <div className="error-message">{errors.fullName}</div>}
        </div>
        
        <div className="form-group">
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        
        <div className="form-group">
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div className="error-message">{errors.password}</div>}
        </div>
        
        <div className="form-group">
          <input 
            type="password" 
            name="confirmPassword" 
            placeholder="Confirm Password" 
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
        </div>
        
        <button type="submit">Sign Up</button>
      </form>
      
      <div className="social-signup">
        <button className="google-signup" onClick={handleGoogleSignup}>
          <i className="fab fa-google"></i>Sign Up with Google
        </button>
        <button className="facebook-signup" onClick={handleFacebookSignup}>
          <i className="fab fa-facebook"></i>Sign Up with Facebook
        </button>
      </div>
      
      <p className="login-link">Already have an account? <a href="login-react.html">Login</a></p>
    </div>
  );
};

export default SignupForm; 