import React, { useState } from 'react';

const LoginForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Validation errors state
  const [errors, setErrors] = useState({});
  
  // Success message state
  const [successMessage, setSuccessMessage] = useState('');

  // Remember me state
  const [rememberMe, setRememberMe] = useState(false);

  // Password visibility state
  const [showPassword, setShowPassword] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Toggle remember me
  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Validate form
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

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
        setSuccessMessage("Logging in...");
        
        // Simulating server response time
        setTimeout(() => {
          setSuccessMessage("Login successful! Redirecting to dashboard...");
          
          // Redirect to dashboard page after successful login
          setTimeout(() => {
            window.location.href = "index.html"; // Change to dashboard page
          }, 1500);
        }, 1000);
        
        // In a real application, you would use fetch or axios:
        /*
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (response.ok) {
          setSuccessMessage("Login successful! Redirecting to dashboard...");
          setTimeout(() => {
            window.location.href = "dashboard.html";
          }, 1500);
        } else {
          const errorData = await response.json();
          setErrors({ submit: errorData.message || 'Login failed' });
        }
        */
      } catch (error) {
        setErrors({ submit: "An error occurred during login. Please try again." });
      }
    }
  };

  // Google login handler
  const handleGoogleLogin = () => {
    // Implement Google OAuth integration
    alert("Google login integration would be implemented here");
  };
  
  // Facebook login handler
  const handleFacebookLogin = () => {
    // Implement Facebook OAuth integration
    alert("Facebook login integration would be implemented here");
  };

  return (
    <div className="login-container">
      <h2>Welcome Back</h2>
      
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errors.submit && <div className="error-message">{errors.submit}</div>}
      
      <form id="loginForm" onSubmit={handleSubmit}>
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
        
        <div className="form-group password-field">
          <input 
            type={showPassword ? "text" : "password"} 
            name="password" 
            placeholder="Password" 
            value={formData.password}
            onChange={handleChange}
          />
          <i 
            className={`password-toggle fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`} 
            onClick={togglePasswordVisibility}
          ></i>
          {errors.password && <div className="error-message">{errors.password}</div>}
        </div>
        
        <div className="form-options">
          <div className="remember-me">
            <input 
              type="checkbox" 
              id="remember" 
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <label htmlFor="remember">Remember me</label>
          </div>
          <a href="#" className="forgot-password">Forgot password?</a>
        </div>
        
        <button type="submit">Login</button>
      </form>
      
      <div className="divider">
        <span>OR</span>
      </div>
      
      <div className="social-login">
        <button className="google-login" onClick={handleGoogleLogin}>
          <i className="fab fa-google"></i>Login with Google
        </button>
        <button className="facebook-login" onClick={handleFacebookLogin}>
          <i className="fab fa-facebook"></i>Login with Facebook
        </button>
      </div>
      
      <p className="signup-link">Don't have an account? <a href="signup-react.html">Sign Up</a></p>
    </div>
  );
};

export default LoginForm; 