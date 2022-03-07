import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function Validations() {
    const SIX = 6;
    const passwordValidation = password.length >= SIX;
    const emailValidation = email.includes('@') && email.includes('.com');
    const validation = passwordValidation && emailValidation;
    return validation;
  }

  return (
    <form
      onSubmit={ (e) => e.preventDefault() }
    >
      <input
        name="email"
        label="email"
        type="email"
        data-testid="email-input"
        value={ email }
        onChange={ (e) => setEmail(e.target.value) }
        required
      />
      <input
        name="password"
        label="password"
        type="password"
        data-testid="password-input"
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
        required
      />

      <button
        data-testid="login-submit-btn"
        type="submit"
        disabled={ !Validations() }
      >
        Enter
      </button>

    </form>
  );
}

export default Login;
